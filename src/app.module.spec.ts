import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';

describe('AppModule (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/ping (POST)', () => {
    return request(app.getHttpServer())
      .post('/ping')
      .send({
        content: 'hello-world'
      })
      .expect(201)
      .expect({
        ping: 'hello-world',
        pong: 'dlrow-olleh'
      });
  });

  it('/ping (POST) - invalid request', () => {
    return request(app.getHttpServer())
      .post('/ping')
      .send({
        invalid: 'value'
      })
      .expect(500)
      .expect( {
        content: 'is required'
      });
  });

  
});
