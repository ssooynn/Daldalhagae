package com.ssafy.a302.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.a302.common.Utils;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.service.UsersService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UsersController {
	private final UsersService userService;

	@PostMapping("/login")
	public Map<String,String> login(@RequestBody Map<String,Object> map) {
		Map<String, String> data = new HashMap<String, String>();
		if (userService.existsByKakaoId((String)map.get("kakaoId"))) {
			data.put("message",Utils.SUCCESS);
			data.put("accessToken", "accessToken");
			data.put("userSno ", "userSno ");
			return data;
		} else {
			data.put("message",Utils.FAIL);
			return data;
		}
	}
	
	@PostMapping("/logout")
	public String logout(@RequestBody String kakaoId) {
		return Utils.SUCCESS;
	}

}
