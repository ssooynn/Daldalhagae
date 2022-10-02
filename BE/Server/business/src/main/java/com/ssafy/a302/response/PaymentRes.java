package com.ssafy.a302.response;

import com.ssafy.a302.domain.Users;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PaymentRes {
	int paymentNo;
	String kakaoId;
	String name;
	String phone;
	String address;
	
	public PaymentRes(Users users, int paymentNo) {
		this.kakaoId=users.getKakaoId();
		this.name=users.getName();
		this.phone=users.getPhone();
		this.address=users.getAddress();
		this.paymentNo=paymentNo;
	}
}
