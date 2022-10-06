package com.ssafy.a302.request;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PaymentReq {
	private boolean paymentFlag;
	private String usersSno;
	private List<PaymentSubHistoryReq> subscriptionHistorys;
}
