var express = require('express');
var router = express.Router();

// GET ALL USER DATA
router.get('/', function(req, res, next) {
  res.send('View All user data');
});

// GET - USER BY ID
router.get('/:id', function(req, res, next) {
  res.send(`View user by id - ${req.params.id} `);
});


// POST - CREATE NEW USER
router.post('/', function(req, res, next) {
  res.send('Create new user');
});

// PATCH - EDIT  USER
router.patch('/:id', function(req, res, next) {
  res.send(`Edit user by id - ${req.params.id} `);
});


// DELETE - DELETE USER DATA
router.delete('/:id', function(req, res, next) {
  res.send(`Delete user by id - ${req.params.id} `);
});



module.exports = router;
