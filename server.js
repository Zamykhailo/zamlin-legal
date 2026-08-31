const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'privacy.html'));
});

app.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, 'terms.html'));
});

app.get('/data-deletion', (req, res) => {
  res.sendFile(path.join(__dirname, 'data-deletion.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ZAMLIN AI legal site running on port ${PORT}`);
});
