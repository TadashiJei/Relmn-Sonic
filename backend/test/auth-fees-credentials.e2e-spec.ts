import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

const maybeDescribe = process.env.MONGODB_URI ? describe : describe.skip;

maybeDescribe('Auth, Fees, Credentials (e2e)', () => {
  let app: INestApplication;
  let httpServer: any;

  // Auth state
  const rnd = Math.floor(Math.random() * 1_000_000);
  const email = `user${rnd}@example.com`;
  const password = 'Passw0rd!';
  let accessToken: string;

  // Domain state
  let scribeId: string;
  let scribbleId: string;
  let credentialId: string;

  beforeAll(async () => {
    if (!process.env.JWT_SECRET) {
      process.env.JWT_SECRET = 'test-secret';
    }
    // Ensure fee verification doesn't hit chain during tests
    process.env.FEE_VERIFY_ON_RECORD = 'false';

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }),
    );

    await app.init();
    httpServer = app.getHttpServer();
  });

  afterAll(async () => {
    if (app) await app.close();
  });

  // Auth
  it('POST /auth/register registers a user', async () => {
    const payload = {
      firstName: 'Test',
      lastName: 'User',
      email,
      password,
      phone: '123456789',
      country: 'US',
    };

    const res = await request(httpServer).post('/auth/register').send(payload).expect(201);
    expect(res.body).toHaveProperty('user');
    expect(res.body).toHaveProperty('accessToken');
    expect(res.body.user.email).toBe(email.toLowerCase());
  });

  it('POST /auth/login logs in and returns access token', async () => {
    const res = await request(httpServer)
      .post('/auth/login')
      .send({ email, password })
      .expect(201);
    expect(res.body).toHaveProperty('user');
    expect(res.body).toHaveProperty('accessToken');
    accessToken = res.body.accessToken;
  });

  it('GET /auth/me returns the current user when authorized', async () => {
    const res = await request(httpServer)
      .get('/auth/me')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);
    expect(res.body).toHaveProperty('user');
    expect(res.body.user.email).toBe(email.toLowerCase());
  });

  it('POST /auth/refresh returns a new access token', async () => {
    const res = await request(httpServer)
      .post('/auth/refresh')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(201);
    expect(res.body).toHaveProperty('accessToken');
    expect(typeof res.body.accessToken).toBe('string');
    accessToken = res.body.accessToken;
  });

  // Scribe + Scribble prerequisites for Fees and Credentials
  it('POST /scribes creates a Scribe', async () => {
    const handle = `scribe_${rnd}`;
    const wallet = `0x${'a'.repeat(34)}${(rnd % 0xffffff).toString(16).padStart(6, '0')}`;

    const res = await request(httpServer)
      .post('/scribes')
      .send({ wallet, handle, bio: 'Test scribe' })
      .expect(201);

    expect(res.body).toHaveProperty('_id');
    expect(res.body.handle).toBe(handle);
    scribeId = res.body._id;
  });

  it('POST /scribbles creates a Scribble for the Scribe', async () => {
    const res = await request(httpServer)
      .post('/scribbles')
      .send({ scribeId, contentPreview: 'hello world', tags: ['relmn', 'sonic'] })
      .expect(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.scribeId).toBe(scribeId);
    scribbleId = res.body._id;
  });

  // Fees
  it('POST /fees/record records a fee event (no on-chain verify)', async () => {
    const uniqueHex = rnd.toString(16);
    const txHash = `0x${'b'.repeat(64 - uniqueHex.length)}${uniqueHex}`;
    const payload = {
      scribbleId,
      txHash,
      amount: '1000000000000000',
      payer: `0x${'1'.repeat(40)}`,
      recipient: `0x${'2'.repeat(40)}`,
    };

    const res = await request(httpServer).post('/fees/record').send(payload).expect(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.txHash).toBe(payload.txHash);
  });

  it('GET /fees/by-scribble/:scribbleId returns fee events', async () => {
    const res = await request(httpServer)
      .get(`/fees/by-scribble/${scribbleId}`)
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(res.body[0].scribbleId).toBe(scribbleId);
  });

  // Credentials
  it('POST /credentials/verify verifies and stores a credential', async () => {
    const payload = {
      scribeId,
      type: 'expertise',
      issuer: 'SonicDAO',
      proof: `proof-${rnd}`,
      nftTokenId: '123',
    };

    const res = await request(httpServer).post('/credentials/verify').send(payload).expect(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.status).toBe('verified');
    credentialId = res.body._id;
  });

  it('GET /credentials/:id returns the specific credential', async () => {
    const res = await request(httpServer).get(`/credentials/${credentialId}`).expect(200);
    expect(res.body._id).toBe(credentialId);
    expect(res.body.scribeId).toBe(scribeId);
  });

  it('GET /credentials/by-scribe/:scribeId lists credentials for the scribe', async () => {
    const res = await request(httpServer).get(`/credentials/by-scribe/${scribeId}`).expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(res.body[0].scribeId).toBe(scribeId);
  });
});
