const express= require('express');
const router = express.Router();
const shopsController = require('../controllers/shops');

router.get('/', shopsController.getAllShops);

module.exports = router;