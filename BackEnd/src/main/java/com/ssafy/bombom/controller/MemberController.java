package com.ssafy.bombom.controller;

import java.util.*;

import javax.servlet.http.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ssafy.bombom.model.Member;
import com.ssafy.bombom.model.Notice;
import com.ssafy.bombom.model.service.JwtServiceImpl;
import com.ssafy.bombom.model.service.MemberService;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/member")
public class MemberController {

	public static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	private static final String SUCCESS = "success"; // success메세지
	private static final String FAIL = "fail"; // fail 메세지

	@Autowired
	private JwtServiceImpl jwtService;

	@Autowired
	private MemberService memberService;

	// 회원가입
	@PostMapping("/join")
	public ResponseEntity<String> joinMember(@RequestBody Member member) {
		if (memberService.joinMember(member)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

	// 로그인
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> login(@RequestBody Member member) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;
		try {
			Member loginUser = memberService.login(member);
			System.out.println(loginUser);
			if (loginUser != null) {
				String token = jwtService.create("memberId", loginUser.getMemberId(), "access-token");// key, data,
																										// subject
				logger.debug("로그인 토큰정보 : {}", token);
				// 토큰과 메세지를 넘겨줌.
				resultMap.put("access-token", token);
				resultMap.put("message", SUCCESS);
				status = HttpStatus.ACCEPTED;
			} else {
				resultMap.put("message", FAIL);
				status = HttpStatus.ACCEPTED;
			}
		} catch (Exception e) {
			logger.error("로그인 실패 : {}", e);
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}

	// 회원정보
	@GetMapping("/info/{memberId}")
	public ResponseEntity<Map<String, Object>> getInfo(@PathVariable("memberId") String memberId,
			HttpServletRequest request) {
//		logger.debug("userid : {} ", userid);
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		if (jwtService.isUsable(request.getHeader("access-token"))) {
			logger.info("사용 가능한 토큰!!!");
			try {
//				로그인 사용자 정보.
				Member member = memberService.memberInfo(memberId);
				resultMap.put("memberInfo", member);
				resultMap.put("message", SUCCESS);
				status = HttpStatus.ACCEPTED;
			} catch (Exception e) {
				logger.error("정보조회 실패 : {}", e);
				resultMap.put("message", e.getMessage());
				status = HttpStatus.INTERNAL_SERVER_ERROR;
			}
		} else {
			logger.error("사용 불가능 토큰!!!");
			resultMap.put("message", FAIL);
			status = HttpStatus.ACCEPTED;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}

//	멤버정보 수정
	@PutMapping("/updateMember/{memberId}")
	public ResponseEntity<String> updateMember(@RequestBody Member member) {
		System.out.println("업뎃도착");
		if (memberService.updateMember(member)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

// 회원탈퇴
	@DeleteMapping("/deleteMember/{memberId}")
	public ResponseEntity<String> deleteMember(@PathVariable String memberId) {
		System.out.println("아이디 : " + memberId);
		if (memberService.deleteMember(memberId)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

}
