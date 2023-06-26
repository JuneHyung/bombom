const Shop = require('../models/shop');

exports.getAllShops = async (req, res, next) => {
  try{
    const allShops = await Shop.findAll();
    // console.log(allShops)
    res.status(200).json(allShops);
  }catch(err){
    next(err);
  }
}

exports.getShopsByLocName = async (req, res, next) => {
  try{
    const target = req.params.locName
    const shopList = await Shop.findAll({where: {locName: target}});
    res.status(200).json(shopList);
  }catch(err){
    next(err);
  }
}
