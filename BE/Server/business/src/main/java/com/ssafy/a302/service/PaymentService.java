package com.ssafy.a302.service;

import com.ssafy.a302.request.PaymentReq;
import com.ssafy.a302.response.PaymentRes;

public interface PaymentService {
	void addPayment(PaymentReq paymentReq);
	PaymentRes getPaymetnNo(String usersNo);
}
