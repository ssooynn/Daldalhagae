package com.ssafy.a302.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.a302.dto.PetDto;
import com.ssafy.a302.request.PetReq;
import com.ssafy.a302.response.PetRes;

public interface PetService {
	Map<String, List<PetRes>> getPetInfo(String userId);
	Map<String, PetRes> getPetInfoByPetId(String petId);
	void updatePetInfo(PetReq petReq, MultipartFile image);
	void addPetInfo(PetReq petReq, MultipartFile image);
}
