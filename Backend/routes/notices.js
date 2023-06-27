const express= require('express');
const router = express.Router();
const noticesController = require('../controllers/notices');

router.get('/', noticesController.getAllNotices);
router.get('/:noticeId', noticesController.getNoticeById);
router.post('/', noticesController.postNotice);
router.put('/', noticesController.putNotice);
router.delete('/:noticeId', noticesController.deleteNotice);
// router.get('/:locName', shopsController.getShopsByLocName);

module.exports = router;