const express = require('express');
const router = express.Router();
const foodsCtrl = require('../controllers/foods');

const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, foodsCtrl.index);
router.get('/new', isLoggedIn, foodsCtrl.new);
router.get('/:id', isLoggedIn, foodsCtrl.show);
router.post('/', isLoggedIn, foodsCtrl.create);
router.get('/:id/edit', isLoggedIn, foodsCtrl.edit);
router.put('/:id', isLoggedIn, foodsCtrl.update);
router.delete('/:id', isLoggedIn, foodsCtrl.delete)

module.exports = router;