package com.ssafy.a302.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.a302.common.Utils;
import com.ssafy.a302.request.PaymentReq;
import com.ssafy.a302.response.PaymentRes;
import com.ssafy.a302.service.PaymentService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping(value="/payment", produces = "application/json; charset=utf8")
@RequiredArgsConstructor
@Api(value="구매 컨트롤러")
public class PayController {
	private final PaymentService paymentService;
	
	@ApiOperation(value="상품 구매 확정")
	@PostMapping
	public String addPayment(@RequestBody PaymentReq paymentReq) {
		log.info("req : {}", paymentReq);
		paymentService.addPayment(paymentReq);
		return Utils.SUCCESS;
	}
	
	@ApiOperation(value="구매 시리얼 넘버 조회")
	@GetMapping("/{usersSno}")
	public PaymentRes getPaymentNo(@PathVariable("usersSno") String usersSno) {
		return paymentService.getPaymetnNo(usersSno);
	}
}
