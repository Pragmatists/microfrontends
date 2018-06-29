const express = require('express');
const app = express();

const directory = process.argv[2];
const port = process.argv[3];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function(req, res, next) {
  console.log(req.originalUrl);
  next();
});

app.use(express.static(directory));

app.listen(port, () => console.log(`HTTP server listening on port ${port}, exposing directory ${directory}.`));
