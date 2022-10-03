package com.ssafy.a302.service;

import java.util.List;

import org.apache.catalina.User;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.request.SignUpPetReq;
import com.ssafy.a302.request.SignUpReq;
import com.ssafy.a302.response.MyPageRes;
import com.ssafy.a302.response.UsersInfoRes;

public interface UsersService {
	List<Users> findAll();
	boolean existsByKakaoId(String kakaoId);
	boolean SignUp(SignUpReq signUpReq,List<SignUpPetReq> signUpPetReqs, List<MultipartFile> images) throws Exception;
	UsersDto userInfo(String usersSno);
	void usersUpdate(UsersDto usersDto);
	void usersWithdrow(String usersSno);
	MyPageRes myPageInfo(String usersSno);
    int countUser();
}
