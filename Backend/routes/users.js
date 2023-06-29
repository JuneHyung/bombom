const express= require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getUsers);
router.post('/login', usersController.postLogin);
router.post('/signup', usersController.postUsers);
router.post('/checkPw', usersController.postCheckPassword);
router.delete('/:userId', usersController.deleteUserInfo);
router.put('/userInfo', usersController.putUserInfo);
module.exports = router;