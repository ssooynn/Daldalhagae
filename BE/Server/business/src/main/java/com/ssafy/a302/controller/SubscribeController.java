package com.ssafy.a302.controller;

import java.util.List;
import java.util.Map;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.a302.response.PetRes;

@Api(value="구독 컨트롤러")
@RestController
@RequestMapping(value="subscription", produces = "application/json; charset=utf8")
@RequiredArgsConstructor
public class SubscribeController {
	@ApiOperation(value = "현재 구독정보가져오기", notes = "아직 로그인 토큰 안했어요 userId pathValue로 부탁")
	@GetMapping("/{userId}") // 수정 예정
	public Map<String, List<PetRes>> getPetInfo(@PathVariable("userId") String userId){
		return null;
	}

}
