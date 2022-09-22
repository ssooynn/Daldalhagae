package com.ssafy.a302.response;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionTodayRes {
	private int subscribtionNo;
	private String name;
	private String describtion;
	private int price;
	private String image;
	private int subscribtionHistoryNo;
	private Date startDate;
	private Date endDate;
}
