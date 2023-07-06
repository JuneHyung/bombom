const express= require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const {verifyToken} = require('../middlewares');

// router.post('/token', usersController.createToken);
// router.get('/test', verifyToken, usersController.tokenTest);

router.get('/', usersController.getUsers);
router.post('/login', usersController.postLogin);
router.post('/signup', usersController.postUsers);
router.post('/checkPw', usersController.postCheckPassword);
router.delete('/:userId', usersController.deleteUserInfo);
router.put('/userInfo', usersController.putUserInfo);
module.exports = router;