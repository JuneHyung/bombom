const express= require('express');
const router = express.Router();
const menusController = require('../controllers/menus');

router.get('/', menusController.getAllMenuTypes);
router.get('/:menuType', menusController.getMenuByMenuType);

module.exports = router;