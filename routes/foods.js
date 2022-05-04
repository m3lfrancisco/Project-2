const express = require('express');
const router = express.Router();
const foodsCtrl = require('../controllers/foods');

const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, foodsCtrl.index);
router.get('/new', isLoggedIn, foodsCtrl.new);
router.get('/:id', isLoggedIn, foodsCtrl.show);
router.post('/', isLoggedIn, foodsCtrl.create);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;