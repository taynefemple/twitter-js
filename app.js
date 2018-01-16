const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const router = express.Router();
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: true }));

const jsonParser = bodyParser.json()
app.use(jsonParser);

app.use(function (req, res, next) {
  console.log(req.method, req.path);
  // console.log('incoming', req);
  next();
})

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

app.get('/news', (req, res) => res.send('Totally NOT fake news. It\'s on the internet after all!'));

app.get('/news/special', (req, res) => res.send('This is a very SPECIAL area'));

// router.get('news', (req, res) => res.send('Totally NOT fake news. It\'s on the internet after all!'));





app.listen(3000, (err) => {
  if (err) throw err;
  console.log('Server Listening')
})
