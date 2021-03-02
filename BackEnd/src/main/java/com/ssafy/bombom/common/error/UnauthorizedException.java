package com.ssafy.bombom.common.error;

// 전달 받은 토큰이 문제가 있다면 UnauthorizedException을 발생.
public class UnauthorizedException extends RuntimeException{
	private static final long serialVersionUID = -2238030302650813813L;
	
	public UnauthorizedException() {
		super("계정 권한이 유효하지 않습니다.\n다시 로그인을 해주세요.");
	}
}
