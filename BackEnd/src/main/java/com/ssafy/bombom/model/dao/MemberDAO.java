package com.ssafy.bombom.model.dao;


import org.apache.ibatis.annotations.Mapper;

import com.ssafy.bombom.model.Member;
import com.ssafy.bombom.model.Notice;

@Mapper
public interface MemberDAO {

	public Member login(Member member) throws Exception;
	public Member memberInfo(String memberId) throws Exception;
	public boolean joinMember(Member member);
	public boolean updateMember(Member member);
	public boolean deleteMember(String memberId);
}
