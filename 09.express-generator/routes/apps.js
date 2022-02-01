var express = require('express');
var router = express.Router();

// GET ALL APPS DATA
router.get('/', function(req, res, next) {
  res.send('View All apps data');
});

// GET - APPS BY ID
router.get('/:id', function(req, res, next) {
  res.send(`View apps by id - ${req.params.id} `);
});

// POST - CREATE NEW APPS
router.post('/', function(req, res, next) {
  res.send('Create new apps');
});

// PATCH - EDIT  APPS
router.patch('/:id', function(req, res, next) {
  res.send(`Edit App by id - ${req.params.id} `);
});


// DELETE - DELETE APP DATA
router.delete('/:id', function(req, res, next) {
  res.send(`Delete app by id - ${req.params.id} `);
});



module.exports = router;
