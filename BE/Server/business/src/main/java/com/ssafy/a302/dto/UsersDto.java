package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


public class UsersDto {

	@Data
	@AllArgsConstructor
	@NoArgsConstructor
	public static class Detail{
	private String userSno;
	private String kakaoId;
	private String email;
	private String name;
	private String phone;
	private String address;
	}
	
	
	@Data
	@AllArgsConstructor
	@NoArgsConstructor
	public static class SignUp{
		private String kakaoId;
		private String email;
		private String name;
		private String phone;
		private String address;
		private PetDto.Detail pet;
	}
	
	@Data
	@AllArgsConstructor
	@NoArgsConstructor
	public static class Info{
		private String email;
		private String name;
		private String phone;
		private String address;
	}
	
	
}
