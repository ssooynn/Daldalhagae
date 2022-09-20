package com.ssafy.a302.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsersInfoRes {
	private String userSno;
	private String kakaoId;
	private String email;
	private String name;
	private String phone;
	private String address;
}

