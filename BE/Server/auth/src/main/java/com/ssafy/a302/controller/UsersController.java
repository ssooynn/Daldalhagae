package com.ssafy.a302.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.a302.common.Utils;
import com.ssafy.a302.response.LoginReq;
import com.ssafy.a302.service.UsersService;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UsersController {
	private final UsersService usersService;

	@ApiOperation(value = "로그인")
	@PostMapping("/login")
	public LoginReq login(@RequestBody Map<String, Object> map) throws Exception {

		Object object = map.get("kakaoId");
		if (!(object instanceof String)) {
			throw new Exception();
		}
		String kakaoId = (String) object;
		return usersService.login(kakaoId);
	}

	@ApiOperation(value = "로그아웃")
	@PostMapping("/logout")
	public String logout(@RequestBody Map<String, Object> map, HttpServletRequest req) throws Exception {
		String token = req.getHeader(Utils.AUTHORIZATION).replace(Utils.BEARER, "").trim();

		Object object = map.get("usersSno");
		if (!(object instanceof String)) {
			throw new Exception();
		}

		if (usersService.logout((String) object, token))
			return Utils.SUCCESS;
		return Utils.FAIL;
	}

}
