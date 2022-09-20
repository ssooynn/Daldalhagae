package com.ssafy.a302.serviceimpl;

import org.springframework.stereotype.Service;

import com.ssafy.a302.repository.UsersRepository;
import com.ssafy.a302.service.UsersService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsersServiceImpl implements UsersService{
	private final UsersRepository usersRep;

	@Override
	public boolean existsByKakaoId(String kakaoId) {
		return usersRep.existsByKakaoId(kakaoId);
	}
	
	
}
