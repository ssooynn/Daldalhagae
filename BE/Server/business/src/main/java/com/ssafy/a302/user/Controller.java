package com.ssafy.a302.user;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "테스트용")
@RestController
//@RequestMapping("/user")
public class Controller {

	@GetMapping("/test")
	public String apiTest() {
		return "userApiTest";
	}
}
