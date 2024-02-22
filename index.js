const express = require('express');
const { resolve } = require('path');
var cron = require('node-cron');
const fs = require('fs');

const app = express();
const port = 3010;

cron.schedule('*/10 * * * * *', function () {
  let data = `${new Date().toUTCString()}  
  : Server is working\n`;

  // Appending data to logs.txt file
  fs.appendFile('logs.txt', data, function (err) {
    if (err) throw err;

    console.log('Status Logged!');
  });
});
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
