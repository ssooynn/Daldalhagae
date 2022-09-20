package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ServiceReviewDto {
	private int serviceReviewNo;
	private int rate;
	private String content;
	private String image;
	private UsersDto users;
	private SubscribtionHistoryDto subscribtionHistory;
}
