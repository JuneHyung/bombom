package com.ssafy.bombom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bombom.model.Notice;
import com.ssafy.bombom.model.service.NoticeService;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/notice")
public class NoticeController {
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired
	private NoticeService service;
	
	// 공지사항 정보목록을 조회
	@GetMapping
	public ResponseEntity<List<Notice>> listNotice()throws Exception{
		return new ResponseEntity<List<Notice>>(service.listNotice(), HttpStatus.OK);
	}
	
	// 목록의 상세정보 조회
	@GetMapping("{noitceNo}")
	public ResponseEntity<Notice> detailNotice(@PathVariable int noticeNo){
		return new ResponseEntity<Notice>(service.detailNotice(noticeNo), HttpStatus.OK);
	}
	
	// 공지사항 등록
	@PostMapping
	public ResponseEntity<String> writeNotice(@RequestBody Notice notice) {
		System.out.println(notice.getNoticeTitle()+" "+ notice.getNoticeContent());
		if (service.writeNotice(notice)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	// 공지사항 수정
	@PutMapping("{noticeNo}")
	public ResponseEntity<String> updateNotice(@RequestBody Notice notice) {
		if (service.updateNotice(notice)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

	// 공지사항 조회수up
	@PutMapping("/view/{noticeNo}")
	public ResponseEntity<String> noticeViewUp(@RequestBody Notice notice) {
		System.out.println("여기까지옴.");
		if (service.noticeViewUp(notice)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
	
	// 공지사항 삭제
	@DeleteMapping("{noticeNo}")
	public ResponseEntity<String> deleteNotice(@PathVariable int noticeNo) {
		if (service.deleteNotice(noticeNo)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}
}
