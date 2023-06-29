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
  if(!userInfo || req.body.password !== userInfo.userPw) res.status(400).json({code: 400, message: '아이디 또는 비밀번호를 확인해주세요.' });
  else{
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
  }
}

exports.postCheckPassword = async (req, res, next) =>{
  const userInfo = await User.findOne({where: {userId: req.body.id}});
  if(req.body.password === userInfo.userPw){
    res.status(200).json({code: 200, message: 'SUCCESS'});
  }else{
    res.status(400).json({code: 400, message: '비밀번호가 맞지 않습니다.' });
  }
}

exports.putUserInfo = async (req, res, next) =>{
  const userInfo = await User.findOne({where: {userId: req.body.userId}});

  if(!userInfo) res.status(400).json('해당 유저를 찾지 못하였습니다.');
  const updateUser = await User.update(req.body, {where: {userId: req.body.userId}})
  if(updateUser) res.status(200).json({code: 200, message: '저장 완료하였습니다!'});
  else res.status(400).json({code: 400, message: 'FAIL'});
}

exports.deleteUserInfo = async (req, res, next) =>{
  const {userId} = req.params
  console.log(userId)
  const deleteUser = await User.destroy({where: {userId}})
  if(deleteUser) res.status(200).json({code: 200, message: '탈퇴 완료하였습니다!'});
  else res.status(400).json({code: 400, message: 'FAIL'});
}