const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.use('/src', express.static(__dirname + '/src'));

app.post('/save-word', (req, res) => {
  fs.writeFileSync('data.json', JSON.stringify(req.body));
  res.send('Word saved from script.js');
});

app.get('/get-word', (req, res) => {
  if (fs.existsSync('data.json')) {
    const data = fs.readFileSync('data.json');
    res.send(data);
  } else {
    res.send(JSON.stringify({ word: '' }));
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
