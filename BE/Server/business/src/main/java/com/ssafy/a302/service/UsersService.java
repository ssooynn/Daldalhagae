package com.ssafy.a302.service;

import java.util.List;

import org.apache.catalina.User;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.request.SignUpReq;
import com.ssafy.a302.response.UsersInfoRes;

public interface UsersService {
	List<Users> findAll();
	boolean existsByKakaoId(String kakaoId);
	String SignUp(SignUpReq signUpReq) throws Exception;
	UsersDto userInfo(String usersSno);
	void usersUpdate(UsersDto usersDto);
	void usersWithdrow(String usersSno);
}
