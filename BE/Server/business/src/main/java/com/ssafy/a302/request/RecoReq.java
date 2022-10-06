package com.ssafy.a302.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecoReq {
	private boolean recoFlag;
	private String petSno;
	private int subscriptionNo;
	private int historyNo;
}
