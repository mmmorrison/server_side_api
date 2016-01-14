var express = require('express');
var router = express.Router();
var unirest = require('unirest');
require('dotenv').load();
var key = process.env.NYT_API_KEY;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'books' });
});

router.get('/books', function (req, res, next) {
  unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + key)
    .end(function (response) {
  res.render('books', {books:response.body.results.books})
})
});

router.get('/new', function (req, res, next) {
  res.render('new')
});

router.get('/show', function (req, res, next) {
  res.render('show')
});

router.get('/delete', function(req, res, next) {
  res.render('delete')
});

router.get('/:id/edit', function(req, res, next) {
  res.render('edit')
})

module.exports = router;
