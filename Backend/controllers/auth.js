const jwt = require('jsonwebtoken');
const {User} = require('../models');

exports.createToken=async(req,res)=>{
  const {clientSecret} = req.body;
  try{
    const domain = await Domain.findeOne({
      where:{clientSecret},
      include:{
        model:User,
        attribute:['userId', 'userName'],
      }
    });
    if(!domain){
      return res.status(401).json({code:401, meesage: '등록되지 않은 도메인 입니다. 도메인 등록먼저 해주세요'});
    }
    const token = jwt.sign({
      id: domain.User.userId,
      nick: domain.User.userName,
    }, process.env.JWT_SECRET,{
      expiresIn: '1m', // 유효시간
      issuer: 'bombom', // 발급자
    })
    return res.json({
      code:200,
      message: '토큰 발급 완료!',
      token,
    })
  }catch(err){
    console.error(err);
    return res.status(500).json({
      code:500,
      message: 'Server Error'
    })
  }
}

exports.tokenTest = (req,res)=>{
  res.json(res.locals.decoded);
}