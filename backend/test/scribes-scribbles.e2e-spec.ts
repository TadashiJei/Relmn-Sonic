import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

const maybeDescribe = process.env.MONGODB_URI ? describe : describe.skip;

maybeDescribe('Scribes & Scribbles (e2e)', () => {
  let app: INestApplication;
  let httpServer: any;

  let scribeId: string;
  let scribbleId: string;
  const handle = `alice_${Math.floor(Math.random() * 1_000_000)}`;
  const handleUpper = handle.toUpperCase();
  const wallet = `0x${'1'.repeat(34)}${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`;

  beforeAll(async () => {
    if (!process.env.JWT_SECRET) {
      process.env.JWT_SECRET = 'test-secret';
    }
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

  it('POST /scribes creates a Scribe', async () => {
    const payload = {
      wallet,
      handle,
      bio: 'Hello from Alice',
    };

    const res = await request(httpServer).post('/scribes').send(payload).expect(201);

    expect(res.body).toHaveProperty('_id');
    expect(res.body.wallet).toBe(payload.wallet.toLowerCase());
    expect(res.body.handle).toBe(payload.handle);

    scribeId = res.body._id;
  });

  it('GET /scribes?handle=... filters by handle (case-insensitive)', async () => {
    const res = await request(httpServer).get('/scribes').query({ handle: handleUpper }).expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(res.body[0].handle).toBe(handle);
  });

  it('GET /scribes/:id returns the created Scribe', async () => {
    const res = await request(httpServer).get(`/scribes/${scribeId}`).expect(200);
    expect(res.body._id).toBe(scribeId);
    expect(res.body.handle).toBe(handle);
  });

  it('PATCH /scribes/:id updates bio', async () => {
    const res = await request(httpServer)
      .patch(`/scribes/${scribeId}`)
      .send({ bio: 'Updated bio' })
      .expect(200);
    expect(res.body.bio).toBe('Updated bio');
  });

  it('POST /scribbles creates a Scribble for the Scribe', async () => {
    const payload = {
      scribeId,
      contentPreview: 'gm sonic',
      tags: ['sonic', 'relmn'],
    };

    const res = await request(httpServer).post('/scribbles').send(payload).expect(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.scribeId).toBe(scribeId);
    expect(res.body.contentPreview).toBe('gm sonic');
    expect(Array.isArray(res.body.tags)).toBe(true);

    scribbleId = res.body._id;
  });

  it('GET /scribbles returns a list', async () => {
    const res = await request(httpServer).get('/scribbles').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  it('GET /scribbles/:id returns the created Scribble', async () => {
    const res = await request(httpServer).get(`/scribbles/${scribbleId}`).expect(200);
    expect(res.body._id).toBe(scribbleId);
    expect(res.body.scribeId).toBe(scribeId);
  });

  it('PATCH /scribbles/:id updates contentPreview', async () => {
    const res = await request(httpServer)
      .patch(`/scribbles/${scribbleId}`)
      .send({ contentPreview: 'updated content' })
      .expect(200);
    expect(res.body.contentPreview).toBe('updated content');
  });

  it('POST /scribbles rejects invalid contentPreview length', async () => {
    const longText = 'x'.repeat(500);
    await request(httpServer)
      .post('/scribbles')
      .send({ scribeId, contentPreview: longText })
      .expect(400);
  });

  it('POST /scribbles rejects invalid tags', async () => {
    await request(httpServer)
      .post('/scribbles')
      .send({ scribeId, contentPreview: 'ok', tags: ['valid', 'Bad-Tag'] })
      .expect(400);
  });
});
