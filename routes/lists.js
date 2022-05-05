const express = require('express');
const router = express.Router();
const listsCtrl = require('../controllers/lists');

const isLoggedIn = require('../config/auth');

router.get('/lists', isLoggedIn, listsCtrl.listIndex);
router.post('/lists/:id', isLoggedIn, listsCtrl.create);
// router.post('/lists/:id', isLoggedIn, listsCtrl.addList);
router.get('/lists', isLoggedIn, listsCtrl.show);

module.exports = router;