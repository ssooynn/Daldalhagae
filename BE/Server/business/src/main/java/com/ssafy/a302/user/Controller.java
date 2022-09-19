package com.ssafy.a302.user;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.service.UsersService;

@Api(value = "테스트용")
@RestController
@RequiredArgsConstructor
//@RequestMapping("/user")
public class Controller {
	private final UsersService userService;
	
	@GetMapping("/test")
	public List<Users> apiTest() {
		List<Users> list = userService.findAll();
		return list;
	}
}
