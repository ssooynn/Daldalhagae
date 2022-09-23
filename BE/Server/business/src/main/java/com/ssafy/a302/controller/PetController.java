package com.ssafy.a302.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.ws.rs.Path;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.a302.dto.PetDto;
import com.ssafy.a302.request.PetReq;
import com.ssafy.a302.response.PetRes;
import com.ssafy.a302.service.PetService;
import com.ssafy.a302.serviceImpl.PetServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@Api(value="펫 컨트롤러")
@RestController
@RequestMapping(value="pet", produces = "application/json; charset=utf8")
@RequiredArgsConstructor
public class PetController {

	private final PetServiceImpl petServiceImpl;

	@ApiOperation(value = "전체 펫정보가져오기", notes = "아직 로그인 토큰 안했어요 userId pathValue로 부탁")
	@GetMapping("/{userId}") // 수정 예정
	public Map<String,List<PetRes>> getPetInfo(@PathVariable("userId") String userId){
		List<Map<String, PetRes>> list = new ArrayList<>();
		System.out.println(petServiceImpl.getPetInfo(userId));

		return petServiceImpl.getPetInfo(userId);
	}

	@ApiOperation(value = "펫정보 수정하기")
	@PatchMapping("")
	public String updatePetInfo(@RequestPart PetReq petReq, @RequestPart(required = false) MultipartFile image){
		petServiceImpl.updatePetInfo(petReq, image);
		return "update";
	}

	@ApiOperation(value = "펫정보추가하기")
	@PostMapping("")
	public String addPetInfo(@RequestPart PetReq petReq, @RequestPart(required = false) MultipartFile image){
		petServiceImpl.addPetInfo(petReq, image);
		return "add";
	}
}
