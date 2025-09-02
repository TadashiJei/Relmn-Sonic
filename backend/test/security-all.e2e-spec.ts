import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe, Controller, Get, Req, UseGuards } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { JwtAuthGuard } from './../src/auth/jwt-auth.guard';
import { Roles } from './../src/auth/roles.decorator';
import { Role } from './../src/auth/roles.enum';
import { JwtModule, JwtService } from '@nestjs/jwt';

// Test-only controller to validate RolesGuard
@Controller('e2e')
@UseGuards(JwtAuthGuard)
class TestE2EController {
  @Get('admin-only')
  @Roles(Role.Admin)
  adminOnly(@Req() req: any) {
    return { ok: true, sub: req.user?.sub };
  }
}

const maybeDescribe = process.env.MONGODB_URI ? describe : describe.skip;

maybeDescribe('Security & Core Flows (e2e)', () => {
  let app: INestApplication;
  let httpServer: any;
  let jwtService: JwtService;

  // Auth state
  const rnd = Math.floor(Math.random() * 1_000_000);
  const email = `secuser${rnd}@example.com`;
  const password = 'Passw0rd!';
  let accessToken: string;
  let sub: string;

  // Domain
  let scribeId: string;
  let scribbleId: string;
  let credentialId: string;

  beforeAll(async () => {
    if (!process.env.JWT_SECRET) process.env.JWT_SECRET = 'test-secret';
    process.env.FEE_VERIFY_ON_RECORD = 'false';

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        JwtModule.register({
          secret: process.env.JWT_SECRET || 'test-secret',
          signOptions: { expiresIn: '7d' },
        }),
      ],
      controllers: [TestE2EController],
      providers: [JwtAuthGuard],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }),
    );
    await app.init();

    httpServer = app.getHttpServer();
    jwtService = app.get(JwtService);
  });

  afterAll(async () => {
    if (app) await app.close();
  });

  it('GET /health is public', async () => {
    await request(httpServer).get('/health').expect(200);
  });

  it('GET /auth/me without token -> 401', async () => {
    await request(httpServer).get('/auth/me').expect(401);
  });

  it('Auth: register -> login -> me -> refresh', async () => {
    // register
    const reg = await request(httpServer)
      .post('/auth/register')
      .send({ firstName: 'T', lastName: 'U', email, password, phone: '123', country: 'US' })
      .expect(201);
    expect(reg.body).toHaveProperty('accessToken');

    // login
    const login = await request(httpServer)
      .post('/auth/login')
      .send({ email, password })
      .expect(201);
    accessToken = login.body.accessToken;

    // me
    const me = await request(httpServer)
      .get('/auth/me')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);
    expect(me.body.user.email).toBe(email.toLowerCase());
    sub = me.body.user._id;

    // refresh
    const refresh = await request(httpServer)
      .post('/auth/refresh')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(201);
    expect(refresh.body).toHaveProperty('accessToken');
    accessToken = refresh.body.accessToken;
  });

  it('RolesGuard: admin-only endpoint 403 for non-admin, 200 with admin token', async () => {
    // Non-admin should 403
    await request(httpServer)
      .get('/e2e/admin-only')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(403);

    // Forge admin token with same JWT secret
    const adminToken = await jwtService.signAsync({ sub, email, roles: [Role.Admin] });
    const ok = await request(httpServer)
      .get('/e2e/admin-only')
      .set('Authorization', `Bearer ${adminToken}`)
      .expect(200);
    expect(ok.body.ok).toBe(true);
    expect(ok.body.sub).toBe(sub);
  });

  it('Domain: create scribe and scribble', async () => {
    const handle = `sec_scribe_${rnd}`;
    const wallet = `0x${'a'.repeat(34)}${(rnd % 0xffffff).toString(16).padStart(6, '0')}`;

    const scribe = await request(httpServer)
      .post('/scribes')
      .send({ wallet, handle, bio: 'Test' })
      .expect(201);
    scribeId = scribe.body._id;

    const scribble = await request(httpServer)
      .post('/scribbles')
      .send({ scribeId, contentPreview: 'preview', tags: ['t1'] })
      .expect(201);
    scribbleId = scribble.body._id;
  });

  it('Fees: record and list by scribble', async () => {
    const uniqueHex = rnd.toString(16);
    const txHash = `0x${'b'.repeat(64 - uniqueHex.length)}${uniqueHex}`;
    const payload = {
      scribbleId,
      txHash,
      amount: '100',
      payer: `0x${'1'.repeat(40)}`,
      recipient: `0x${'2'.repeat(40)}`,
    };
    const rec = await request(httpServer).post('/fees/record').send(payload).expect(201);
    expect(rec.body.txHash).toBe(payload.txHash);

    const list = await request(httpServer).get(`/fees/by-scribble/${scribbleId}`).expect(200);
    expect(Array.isArray(list.body)).toBe(true);
    expect(list.body[0].scribbleId).toBe(scribbleId);
  });

  it('Credentials: verify -> get -> list by scribe', async () => {
    const verify = await request(httpServer)
      .post('/credentials/verify')
      .send({ scribeId, type: 'expertise', issuer: 'SonicDAO', proof: `p-${rnd}`, nftTokenId: '1' })
      .expect(201);
    credentialId = verify.body._id;
    expect(verify.body.status).toBe('verified');

    const get = await request(httpServer).get(`/credentials/${credentialId}`).expect(200);
    expect(get.body._id).toBe(credentialId);

    const list = await request(httpServer).get(`/credentials/by-scribe/${scribeId}`).expect(200);
    expect(Array.isArray(list.body)).toBe(true);
    expect(list.body[0].scribeId).toBe(scribeId);
  });
});
