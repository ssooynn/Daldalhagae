package com.ssafy.a302.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class Controller {

	@GetMapping("/test")
	public String userTest() {
		
		return "auth";
	}
}
