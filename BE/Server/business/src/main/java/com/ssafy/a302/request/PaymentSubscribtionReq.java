package com.ssafy.a302.request;

import com.ssafy.a302.domain.Subscribtion;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PaymentSubscribtionReq {
	private int subscriptionNo;
	private String name;
	private String description;
	private int price;
	
	public Subscribtion createSub() {
		if(this.name==null || "".equals(this.name)) {
			this.name="나만의 구독 서비스";
		}
		if("".equals(this.description))
			this.description=null;
		return new Subscribtion(name, description, price);
	}
}
