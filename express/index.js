const express = require('express');
const app = express();

app.get('/hii', (req, res) => {
  res.send('Hello world');
});

app.get('/square', (req, res) => {
  // http://localhost:3000/square?num=6
  let num = parseInt(req.query.num);
  let square = num * num;
  res.send(square);
});

app.get('/sum', (req, res) => {
  //  http://localhost:3000/sum?num1=6&num2=3
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let sum = num1 + num2;
  res.send(sum);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});