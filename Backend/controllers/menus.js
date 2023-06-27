const Menu = require('../models/menu');


exports.getAllMenu = async (req, res, next) => {
  try{
    const allMenus = await Menu.findAll();
    console.log(allMenus)

    res.status(200).json(allMenus);
  }catch(err){
    next(err);
  }
}
exports.getAllMenuTypes = async (req, res, next) => {
  try{
    const allMenus = await Menu.findAll({attributes: ['menuType'],group: ['menuType'], distinct:true,});
    const result = allMenus.map(el=>el.menuType);
    res.status(200).json(result);
  }catch(err){
    next(err);
  }
}

exports.getMenuByMenuType = async (req, res, next) => {
  const {menuType} = req.params
  try{
    const notice = await Menu.findAll({where: {menuType}})
    res.status(200).json(notice);
  }catch(err){
    next(err);
  }
}