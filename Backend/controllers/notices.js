const Notice = require('../models/notice');
const dayjs = require('dayjs');

exports.getAllNotices = async (req, res, next) => {
  try{
    const allNotices = await Notice.findAll();
    console.log(allNotices)

    // data 가공
    const result = allNotices.map(notice=> {
      return {
        ...notice.dataValues,
        noticeDate: dayjs(notice.noticeDate).format('YYYY-MM-DD')
      }
    })

    res.status(200).json(result);
  }catch(err){
    next(err);
  }
}

exports.getNoticeById = async (req, res, next) => {
  const {noticeId} = req.params
  try{
    const notice = await Notice.findByPk(noticeId)
    await Notice.update({noticeView: notice.noticeView+1}, {where: {id: noticeId}})
    res.status(200).json(notice);
  }catch(err){
    next(err);
  }
}

exports.postNotice = async (req, res, next) => {
  const body = {
    noticeTitle: req.body.noticeTitle,
    noticeContent: req.body.noticeContent,
  }
  try{
    const notice = await Notice.create(body)
    if(notice){
    res.status(200).json({code: 200, message: '성공적으로 저장되었습니다.'});
  }else{
      res.status(400).json({code: 400, message: '등록에 실패하였습니다.'});

    }
  }catch(err){
    next(err);
  }
}
exports.putNotice = async (req, res, next) => {
  const id = req.body.noticeId;
  const body = {noticeTitle: req.body.noticeTitle, noticeContent: req.body.noticeContent};
  console.log(id)
  try{
    const updatedNotice = await Notice.update(body, {where: {id}})
    if(updatedNotice[0]===1) {
      res.status(200).json({code: 200, message: '성공적으로 수정되었습니다.'})
    }else{
      res.status(404).json({code: 404, message: '해당 게시물을 찾지 못했습니다.'})
    }
  }catch(err){
    next(err);
  }
}
exports.deleteNotice = async (req, res, next) => {
  const {noticeId} = req.params
  try{
    const deletedNotice = await Notice.destroy({
      where:{id: noticeId},
    })
    console.log(deletedNotice)
    if (deletedNotice === 1) {
      res.status(200).json({code: 200, message: '성공적으로 삭제되었습니다.' });
    } else {
      res.status(404).json({code: 404, message: '해당 게시물을 찾지 못했습니다.' });
    }
  }catch(err){
    next(err);
  }
}