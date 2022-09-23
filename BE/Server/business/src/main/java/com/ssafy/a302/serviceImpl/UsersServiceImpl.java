package com.ssafy.a302.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.repository.UsersRepository;
import com.ssafy.a302.request.SignUpReq;
import com.ssafy.a302.response.UsersInfoRes;
import com.ssafy.a302.service.UsersService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsersServiceImpl implements UsersService {
	private final UsersRepository usersRep;

	@Override
	public boolean existsByKakaoId(String kakaoId) {
		return usersRep.existsByKakaoId(kakaoId);
	}

	@Override
	public List<Users> findAll() {
		List<Users> usersList = usersRep.findAll();
		return usersList;
	}

	/* 회원가입 */
	@Override
	public boolean SignUp(SignUpReq signUpReq) {
		if (usersRep.existsByKakaoId(signUpReq.getKakaoId()))
			return false;
		Users users = signUpReq.transforUsers();
		usersRep.save(users);
		String usersSno = users.getUsersSno();
		
		
		return true;
	}

	/* 회원 정보 */
	@Override
	public Users userInfo(String usersSno) {
		Users users = usersRep.findByUsersSno(usersSno);
		return users;
	}

}
