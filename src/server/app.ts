import express from 'express';

export const app = express();

app.use(express.json());

app.post('/lessons', (_request, response) => {
  return response.status(201).send();
});
