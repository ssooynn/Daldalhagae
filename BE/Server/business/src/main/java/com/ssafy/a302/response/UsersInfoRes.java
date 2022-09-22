package com.ssafy.a302.response;

import java.util.List;

import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.SubscribtionHistory;
import com.ssafy.a302.domain.Users;

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
	private List<Pet> pets;
	private List<SubscribtionHistory> subscriptionHistorys;
	
	public void setAll(Users users) {
		this.userSno =users.getUsersSno();
		this.kakaoId=users.getKakaoId();
		this.email=users.getEmail();
		this.name=users.getName();
		this.phone=users.getPhone();
		this.address=users.getAddress();
	}
}

