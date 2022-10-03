package com.ssafy.a302.controller;

import java.io.IOException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.a302.common.Utils;
import com.ssafy.a302.request.SignUpPetReq;
import com.ssafy.a302.response.RecommendRes;
import com.ssafy.a302.service.RecommendService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@Api(value="추천 컨트롤러")
@RestController
@RequestMapping(value="recommend", produces = "application/json; charset=utf8")
@RequiredArgsConstructor
public class RecommendController {
	private final RecommendService reService;
	
	@ApiOperation(value = "API 연결하기")
	@PostMapping("item")
	public String addPetInfo(@RequestPart(value = "pet") SignUpPetReq signUpPetReq){
		System.out.println("hi");
		return Utils.SUCCESS;
	}

	@ApiOperation(value = "상품 추천")
	@GetMapping("item/{petSno}")
	public RecommendRes addPetInfos(@PathVariable("petSno") String petSno){
		RecommendRes recommendRes = reService.recommend(petSno);
		return recommendRes;
	}

}
