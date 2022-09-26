package com.ssafy.a302.request;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class TestReq {
	private String name;
	private MultipartFile mf;
}
