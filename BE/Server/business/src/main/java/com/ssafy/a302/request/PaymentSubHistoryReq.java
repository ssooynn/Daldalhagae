package com.ssafy.a302.request;

import java.util.List;

import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.Subscribtion;
import com.ssafy.a302.domain.SubscribtionHistory;
import com.ssafy.a302.domain.Users;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PaymentSubHistoryReq {
	private int subscriptionHistoryNo;
	private String petSno;
	private PaymentSubscribtionReq subscription;
	private List<String> feeds;
	private List<String> snacks;
	private List<String> toys;
	
	public SubscribtionHistory createSubHistory(Users users, Pet pet) {
		return new SubscribtionHistory(users, pet);
	}
	
}
