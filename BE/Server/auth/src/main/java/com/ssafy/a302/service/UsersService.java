package com.ssafy.a302.service;

import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.response.LoginReq;

public interface UsersService {
	boolean existsByKakaoId(String kakaoId);
	UsersDto findByKakaoId(String kakaoId);
	LoginReq login(String kakaoId);
	boolean logout(String usersSno, String token);
}
