package com.ssafy.a302.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.a302.dto.PetDto;
import com.ssafy.a302.request.PetReq;
import com.ssafy.a302.request.SignUpPetReq;
import com.ssafy.a302.response.MyPagePetRes;
import com.ssafy.a302.response.PetRes;

public interface PetService {
	Map<String, List<PetRes>> getPetInfo(String userId);
	Map<String, PetRes> getPetInfoByPetId(String petId);
	void updatePetInfo(String usersSno, SignUpPetReq signUpPetReq, MultipartFile image) throws IllegalStateException, IOException;
	void addPetInfo(String usersSno, SignUpPetReq signUpPetReq, MultipartFile image) throws IllegalStateException, IOException;
}
