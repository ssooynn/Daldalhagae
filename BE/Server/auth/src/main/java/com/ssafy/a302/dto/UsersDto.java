package com.ssafy.a302.dto;


import com.ssafy.a302.domain.Users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsersDto {
	private String userSno;
	private String kakaoId;
	private String email;
	private String name;
	private String phone;
	private String address;
	
	public UsersDto(Users users) {
		this.userSno = users.getUsersSno();
		this.kakaoId = users.getKakaoId();
		this.email = users.getEmail();
		this.name = users.getName();
		this.phone = users.getPhone();
		this.address = users.getAddress();
	}
}
