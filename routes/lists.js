const express = require('express');
const router = express.Router();
const listsCtrl = require('../controllers/lists');

const isLoggedIn = require('../config/auth');

router.get('/lists/new', isLoggedIn, listsCtrl.new);
router.post('/lists', isLoggedIn, listsCtrl.create);
router.get('/lists', isLoggedIn, listsCtrl.listIndex);
router.get('/:id', isLoggedIn, listsCtrl.show);
// router.post('/:id', isLoggedIn, listsCtrl.addToList);

module.exports = router;