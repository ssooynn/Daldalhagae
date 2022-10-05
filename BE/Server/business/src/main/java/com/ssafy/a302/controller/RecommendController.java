package com.ssafy.a302.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.a302.common.Utils;
import com.ssafy.a302.request.RecoReq;
import com.ssafy.a302.request.RecommendReq;
import com.ssafy.a302.request.SignUpPetReq;
import com.ssafy.a302.response.RecommendRes;
import com.ssafy.a302.service.RecommendService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Api(value="추천 컨트롤러")
@Slf4j
@RestController
@RequestMapping(value="recommend", produces = "application/json; charset=utf8")
@RequiredArgsConstructor
public class RecommendController {
	private final RecommendService reService;
	

	@ApiOperation(value = "상품 추천")
	@PostMapping("/item")
	public RecommendRes recommend(@RequestBody RecoReq recoReq){
		RecommendRes recommendRes = reService.recommend(recoReq);
		return recommendRes;
//		return null;
	}

}
