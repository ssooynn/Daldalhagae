package com.ssafy.a302.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

/*
*
* */

@Data
//내 후기조회 (매 구독내역마다 1:1)
public class MyReviewRes {
    //구독 정보
    private int subscriptionNo;
    private String subscriptionName;
    private Date subscriptionStartDate;
    private Date subscriptionEndDate;
    //서비스 리뷰
    private int serviceReviewNo;
    private int serviceReviewRate;
    private String serviceReviewContent;
    private String serviceReviewImg;
    private Date serviceReviewRegDate;
    //아이템 리뷰
    private List<ItemReviewRes> itemReviewResList;
}
