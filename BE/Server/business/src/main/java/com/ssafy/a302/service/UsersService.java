package com.ssafy.a302.service;

import java.util.List;

import org.apache.catalina.User;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.request.SignUpReq;

public interface UsersService {
	public List<Users> findAll();
	boolean existsByKakaoId(String kakaoId);
	boolean SignUp(SignUpReq signUpReq);
	public void userInfo(String usersSno);
}
