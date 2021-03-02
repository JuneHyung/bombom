package com.ssafy.bombom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bombom.model.Menu;
import com.ssafy.bombom.model.service.MenuService;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/menu")
public class MenuController {
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired
	private MenuService service;
	
	// 각 메뉴에 맞게 목록을 조회.
	
	@GetMapping
	public ResponseEntity<List<Menu>> listMenu()throws Exception{
		return new ResponseEntity<List<Menu>>(service.listMenu(), HttpStatus.OK);
	}
	
	@GetMapping("/new")
	public ResponseEntity<List<Menu>> newMenuList(){
		return new ResponseEntity<List<Menu>>(service.newMenuList(), HttpStatus.OK);
	}
	
	@GetMapping("/coffee")
	public ResponseEntity<List<Menu>> coffeeMenuList(){
		return new ResponseEntity<List<Menu>>(service.coffeeMenuList(), HttpStatus.OK);
	}
	@GetMapping("/latte")
	public ResponseEntity<List<Menu>> latteMenuList(){
		return new ResponseEntity<List<Menu>>(service.latteMenuList(), HttpStatus.OK);
	}
	
	@GetMapping("/smoothie")
	public ResponseEntity<List<Menu>> smoothieMenuList(){
		return new ResponseEntity<List<Menu>>(service.smoothieMenuList(), HttpStatus.OK);
	}
	
	@GetMapping("/ade")
	public ResponseEntity<List<Menu>> adeMenuList(){
		return new ResponseEntity<List<Menu>>(service.adeMenuList(), HttpStatus.OK);
	}
	
	
	@GetMapping("/tea")
	public ResponseEntity<List<Menu>> teaMenuList(){
		return new ResponseEntity<List<Menu>>(service.teaMenuList(), HttpStatus.OK);
	}
	
	@GetMapping("/juice")
	public ResponseEntity<List<Menu>> juiceMenuList(){
		return new ResponseEntity<List<Menu>>(service.juiceMenuList(), HttpStatus.OK);
	}
	
	@GetMapping("/bubble")
	public ResponseEntity<List<Menu>> bubbleMenuList(){
		return new ResponseEntity<List<Menu>>(service.bubbleMenuList(), HttpStatus.OK);
	}
	
	@GetMapping("/sidemenu")
	public ResponseEntity<List<Menu>> sideMenuList(){
		return new ResponseEntity<List<Menu>>(service.sideMenuList(), HttpStatus.OK);
	}
	
	@GetMapping("{menuNo}")
	public ResponseEntity<Menu> detailMenu(@PathVariable int menuNo){
		return new ResponseEntity<Menu>(service.detailMenu(menuNo), HttpStatus.OK);
	}
}
