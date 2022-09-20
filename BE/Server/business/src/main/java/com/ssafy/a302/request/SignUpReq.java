package com.ssafy.a302.request;

import java.util.ArrayList;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.EffectDto;
import com.ssafy.a302.dto.PetDto;
import com.ssafy.a302.dto.UsersDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignUpReq {
	private String kakaoId;
	private String email;
	private String name;
	private String phone;
	private String address;
	private ArrayList<PetDto> pets;
	
	public Users transforUsers() {
		Users users = new Users(kakaoId, email, name, phone, address);
		return users;
	}
}
