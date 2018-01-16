const path = require('path');
const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.use(express.static('public'))

router.get('/stylesheets/style.css', (req, res, next) => {
  const dirName = path.join(__dirname, '../public/stylesheets/style.css');
  res.sendFile(dirName);
})


module.exports = router;
