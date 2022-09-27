package com.ssafy.a302.response;

import lombok.Data;

import java.util.Date;

@Data
public class ItemReviewRes {
    private int itemReviewNo;
    private String itemSno;
    private String itemName;
    private int rate;
    private String content;
    private String image;
    private Date date;

    //누가 남긴 리뷰인지 추적 가능 하도록.(타인 리뷰 조회시 사용)
    private String usersSno;
    private String usersName;
    private String petSno;
    private String petName;
//    private UsersDto users;
//    private PurchaseDto purchase;
//    private PetDto pet;


}
