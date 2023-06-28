const express= require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getUsers);
router.post('/login', usersController.postLogin);
router.post('/signup', usersController.postUsers);


module.exports = router;