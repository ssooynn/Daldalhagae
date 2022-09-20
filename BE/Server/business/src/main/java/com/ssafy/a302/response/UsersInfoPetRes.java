package com.ssafy.a302.response;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsersInfoPetRes {
	private String petSno;
	private String name;
	private String image;
}
