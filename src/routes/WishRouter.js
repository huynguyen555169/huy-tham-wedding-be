const express = require('express');
const router = express.Router();
const wishController = require('../controllers/WishController');

router.post('/', wishController.addWish);

module.exports = router;
