package com.ssafy.a302.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscribtionHistorySubscribtionDto {
private int subscribtionHistorySubscribtionNo;
	private SubscribtionHistoryDto subscribtionHistory;
	private SubscribtionDto subscribtion;
}
