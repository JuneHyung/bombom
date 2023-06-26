const Shop = require('../models/shop');

exports.getAllShops = async (req, res, next) => {
  try{
    const allShops = await Shop.findAll();
    console.log(allShops)
    res.status(200).json(allShops);
  }catch(err){
    next(err);
  }
}
