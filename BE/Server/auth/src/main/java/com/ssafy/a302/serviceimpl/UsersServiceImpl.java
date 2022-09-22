package com.ssafy.a302.serviceimpl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.google.inject.spi.Message;
import com.ssafy.a302.common.Utils;
import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.jwt.CreateJWT;
import com.ssafy.a302.repository.UsersRepository;
import com.ssafy.a302.response.LoginReq;
import com.ssafy.a302.service.UsersService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsersServiceImpl implements UsersService{
	private final UsersRepository usersRep;
	private final CreateJWT createJWT;
	
	@Override
	public boolean existsByKakaoId(String kakaoId) {
		return usersRep.existsByKakaoId(kakaoId);
	}

	@Override
	public UsersDto findByKakaoId(String kakaoId) {
		return new UsersDto(usersRep.findByKakaoId(kakaoId));
	}

	@Override
	public LoginReq login(String kakaoId) {
		LoginReq loginReq = new LoginReq();
		
		if(usersRep.existsByKakaoId(kakaoId)) {
			Users users = usersRep.findByKakaoId(kakaoId);
			String accessToken = createJWT.createAccessToken(users.getUserSno());
			loginReq.setUsers(users,accessToken);
		}
		
		return loginReq;
	}
	
	
	
	
}
