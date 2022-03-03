const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('server in express');
});

app.listen(port, () => {
  console.log('port run on serve', 'localhost:' + port);
});
