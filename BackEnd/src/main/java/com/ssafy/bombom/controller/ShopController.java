package com.ssafy.bombom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bombom.model.Shop;
import com.ssafy.bombom.model.service.ShopService;


@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/shop")
public class ShopController {
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired
	private ShopService service;
	
	// 각 지역별 점포 정보를 조회
	
	@GetMapping
	public ResponseEntity<List<Shop>> listShop()throws Exception{
		return new ResponseEntity<List<Shop>>(service.listShop(), HttpStatus.OK);
	}
	@GetMapping("/seoul")
	public ResponseEntity<List<Shop>> listSeoul()throws Exception{
		return new ResponseEntity<List<Shop>>(service.listSeoul(), HttpStatus.OK);
	}
	@GetMapping("/busan")
	public ResponseEntity<List<Shop>> listBusan()throws Exception{
		return new ResponseEntity<List<Shop>>(service.listBusan(), HttpStatus.OK);
	}
	@GetMapping("/daegu")
	public ResponseEntity<List<Shop>> listDaegu()throws Exception{
		return new ResponseEntity<List<Shop>>(service.listDaegu(), HttpStatus.OK);
	}
	@GetMapping("/daejeon")
	public ResponseEntity<List<Shop>> listDaejeon()throws Exception{
		return new ResponseEntity<List<Shop>>(service.listDaejeon(), HttpStatus.OK);
	}
	@GetMapping("/ulsan")
	public ResponseEntity<List<Shop>> listUlsan()throws Exception{
		return new ResponseEntity<List<Shop>>(service.listUlsan(), HttpStatus.OK);
	}
	@GetMapping("/saejong")
	public ResponseEntity<List<Shop>> listSaejong()throws Exception{
		return new ResponseEntity<List<Shop>>(service.listSaejong(), HttpStatus.OK);
	}
	@GetMapping("/incheon")
	public ResponseEntity<List<Shop>> listIncheon()throws Exception{
		return new ResponseEntity<List<Shop>>(service.listIncheon(), HttpStatus.OK);
	}
}
