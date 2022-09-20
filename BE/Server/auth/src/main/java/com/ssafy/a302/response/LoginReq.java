package com.ssafy.a302.response;

import com.ssafy.a302.common.Utils;
import com.ssafy.a302.domain.Users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginReq {
	private String userSno;
	private String kakaoId;
	private String name;
	private String accessToken;
	private String message = Utils.FAIL;
	
	public LoginReq(Users users, String accessToken) {
		this.userSno = users.getUserSno();
		this.kakaoId = users.getKakaoId();
		this.name = users.getName();
		this.accessToken = accessToken;
	}
	
	public void setUsers(Users users, String accessToken) {
		this.userSno = users.getUserSno();
		this.kakaoId = users.getKakaoId();
		this.name = users.getName();
		this.message = Utils.SUCCESS;
		this.accessToken =accessToken;
	}
	
	
}
