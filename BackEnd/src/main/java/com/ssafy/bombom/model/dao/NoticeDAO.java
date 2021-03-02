package com.ssafy.bombom.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.bombom.model.Notice;

@Mapper
public interface NoticeDAO {
	public List<Notice> listNotice();
	public Notice detailNotice(int noticeNo);
	public boolean writeNotice(Notice notice);
	public boolean noticeViewUp(Notice notice);
	public boolean updateNotice(Notice notice);
	public boolean deleteNotice(int noticeNo);
}
