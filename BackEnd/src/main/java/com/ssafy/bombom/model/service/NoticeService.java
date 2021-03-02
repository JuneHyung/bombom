package com.ssafy.bombom.model.service;

import java.util.List;

import com.ssafy.bombom.model.Notice;

public interface NoticeService {
	public List<Notice> listNotice();
	public Notice detailNotice(int noticeNo);
	public boolean writeNotice(Notice notice);
	public boolean noticeViewUp(Notice notice);	
	public boolean updateNotice(Notice notice);
	public boolean deleteNotice(int noticeNo);
}
