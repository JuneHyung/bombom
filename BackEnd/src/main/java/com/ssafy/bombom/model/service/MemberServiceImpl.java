package com.ssafy.bombom.model.service;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.bombom.model.Member;
import com.ssafy.bombom.model.dao.MemberDAO;
@Service
public class MemberServiceImpl implements MemberService{

	@Autowired
	private SqlSession sqlSession;
	@Autowired
	private MemberDAO memberDao;

	@Override
	public Member login(Member member) throws Exception {
		System.out.println("아이디는" + member.getMemberId());
		if(member.getMemberId() == null || member.getMemberPw() == null) {
			return null;
		}
		return sqlSession.getMapper(MemberDAO.class).login(member);
	}

	@Override
	public Member memberInfo(String memberId) throws Exception {
		return sqlSession.getMapper(MemberDAO.class).memberInfo(memberId);
	}

	@Override
	public boolean joinMember(Member member) {
		return memberDao.joinMember(member);
	}

	@Override
	public boolean deleteMember(String memberId) {
		return memberDao.deleteMember(memberId);
	}

	@Override
	public boolean updateMember(Member member) {
		return memberDao.updateMember(member);
	}
}
