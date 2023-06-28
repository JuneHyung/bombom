const User = require('../models/user');
const dayjs = require('dayjs');
const _ = require('lodash');

exports.getUsers = async (req, res, next) =>{
  try{
    const allUsers = await User.findAll();
    // console.log(allShops)
    res.status(200).json(allUsers);
  }catch(err){
    next(err);
  }
}
exports.postUsers = async (req, res, next) => {
  const body = {
    userId: req.body.userId,
    userPw: req.body.userPw,
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    userAddress: req.body.userAddress,
    userTel: req.body.userTel,
  }

  try{
    const user = await User.create(body)
    if(user){
      res.status(200).json({code: 200, message: '성공적으로 가입되었습니다.' });
    }else{
      res.status(400).json({code: 400, message: '회원가입에 실패하였습니다.' });
    }
  }catch(err){
    next(err);
  }
}

exports.postLogin = async (req, res, next) =>{
  const userInfo = await User.findOne({where: {userId: req.body.id}});
  if(req.body.password === userInfo.userPw){
    const result = {
      userId: userInfo.userId,
      userName: userInfo.userName,
      userEmail: userInfo.userEmail,
      userAddress: userInfo.userAddress,
      userTel: userInfo.userTel,
      joinDate: userInfo.joinDate,
      isAdmin: userInfo.isAdmin,
    }
    res.status(200).json({code: 200, userInfo: result, message: '성공적으로 로그인되었습니다.' });
  }else{
    res.status(400).json({code: 400, message: '아이디 또는 비밀번호를 확인해주세요.' });
  }
}