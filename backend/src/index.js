const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

let latestData = '';

app.use(cors());
app.use(express.json());

app.post('/api/create-answer', (req, res) => {
  const { data } = req.body;

  if (typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid data. Expected { "data": "string" }' });
  }

  latestData = data;
  res.status(200).json({ message: 'Data stored successfully' });
});

app.get('/api/get-answer', (req, res) => {
  res.status(200).json({ data: latestData });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
