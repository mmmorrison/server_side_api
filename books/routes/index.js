var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', function (req, res, next) {
  res.render('books')
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
