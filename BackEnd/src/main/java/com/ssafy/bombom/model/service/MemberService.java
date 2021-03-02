package com.ssafy.bombom.model.service;

import java.util.Map;

import com.ssafy.bombom.model.Member;

public interface MemberService {
	public Member login(Member member) throws Exception;
	public Member memberInfo(String memberId) throws Exception;
	public boolean joinMember(Member member);
	public boolean updateMember(Member member);
	public boolean deleteMember(String memberId);
}
