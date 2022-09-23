package com.ssafy.a302.dto;

import java.util.Date;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PurchaseDto {
	private int purchaseNo;
	private String itemSno;
	private Date refundDate;
	private SubscribtionHistoryDto subscribtionHistory;
	
}
