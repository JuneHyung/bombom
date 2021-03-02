package com.ssafy.bombom.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.bombom.model.Notice;
import com.ssafy.bombom.model.dao.NoticeDAO;

@Service
public class NoticeServiceImpl implements NoticeService{

	@Autowired
	private NoticeDAO noticeDao;
	
	@Override
	public List<Notice> listNotice() {
		return noticeDao.listNotice();
	}

	@Override
	public Notice detailNotice(int noticeNo) {
		// TODO Auto-generated method stub
		return noticeDao.detailNotice(noticeNo);
	}

	@Override
	public boolean noticeViewUp(Notice notice){
		return noticeDao.noticeViewUp(notice);
	}
	@Override
	public boolean updateNotice(Notice notice) {
		// TODO Auto-generated method stub
		return noticeDao.updateNotice(notice);
	}

	@Override
	public boolean deleteNotice(int noticeNo) {
		// TODO Auto-generated method stub
		return noticeDao.deleteNotice(noticeNo);
	}

	@Override
	public boolean writeNotice(Notice notice) {
		return noticeDao.writeNotice(notice);
	}

}
