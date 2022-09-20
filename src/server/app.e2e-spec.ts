import request from 'supertest';
import { app } from './app';

test('[E2E] Create lesson', async () => {
  const response = await request(app)
    .post('/lessons')
    .send({ title: 'Aula 02' });

  expect(response.status).toBe(201);
  expect(response.body.error).toBeFalsy();
});
