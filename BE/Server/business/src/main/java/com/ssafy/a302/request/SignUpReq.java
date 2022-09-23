package com.ssafy.a302.request;

import java.util.List;
import com.ssafy.a302.domain.Users;
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
	private List<SignUpPetReq> pets;
	
	public Users transforUsers() {
		Users users = new Users(kakaoId, email, name, phone, address);
		return users;
	}
}
