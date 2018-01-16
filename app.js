const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const router = express.Router();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.set('view engine', 'html'); //have res.render work with html files
app.engine('html', nunjucks.render); //when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); //points nujucks to the proper directory for templates
  // noCache, turns off cache when in development, Caching a view saves rendered document & only re-renders if data has changed
app.use(morgan('dev'));

app.use('/', routes);




app.listen(3000, (err) => {
  if (err) throw err;
  console.log('Server Listening')
})
