package com.ssafy.a302.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoSubscriptionsRes {
	private int subscribtionNo;
	private String name;
	private String describtion;
	private int price;
	private String image;
}
