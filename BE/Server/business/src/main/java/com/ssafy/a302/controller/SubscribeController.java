package com.ssafy.a302.controller;

import com.ssafy.a302.dto.SubscriptionIntroDto;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("subscription")
public class SubscribeController {

    @ApiOperation(value = "구독상세 페이지에서 전체 사료, 간식, 장난감 소개")
    @GetMapping()
    public ResponseEntity<?> getSubscriptionInfo(){
        SubscriptionIntroDto subscriptionIntroDto = new SubscriptionIntroDto();
        return ResponseEntity.ok(subscriptionIntroDto);
    }
}
