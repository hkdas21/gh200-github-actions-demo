const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'GH-200 Demo');
  next();
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello from GH-200: GitHub Actions → GHCR → ACR → Azure Web App!');
});

module.exports = app;
