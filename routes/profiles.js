const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profile');

const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, profilesCtrl.index);
router.get('/new', isLoggedIn, profilesCtrl.new);
router.get('/:id', isLoggedIn, profilesCtrl.show);
router.post('/', isLoggedIn, profilesCtrl.create);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
