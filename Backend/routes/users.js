const express= require('express');
const User = require('../models/user');

const router = express.Router();

// 메서드와 파라미터를 통해 쿼리를 조회!
// 어떤이름이 어떻게 쓰이는지 익숙해지기.
router.route('/')
  .get(async(req,res, next)=>{

    try{
      const users = await userInfo.findAll();
      res.join(users);
    }catch(e){
      console.log(err);
      next(err);
    }
  })
  .post(async(req, res, next)=>{
    try{
      const user = await User.create({
        name: req.body.userName,
        address: req.body.userAddress,
        pw: req.body.userPw,
      })
    }catch(e){
      console.log(err);
      next(err);
    }
  })