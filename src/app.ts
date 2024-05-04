import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World from TypeScript!!!111',
  });
});

export default app;
