package com.ssafy.a302.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;


@Data
public class ItemReviewRes {
    private int itemReviewNo;
    private String itemSno;
    private String itemName;
    private int rate;
    private String content;
    private String image;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    //누가 남긴 리뷰인지 추적 가능 하도록.(타인 리뷰 조회시 사용)
    private String usersSno;
    private String usersName;
    private String petSno;
    private String petName;
//    private UsersDto users;
//    private PurchaseDto purchase;
//    private PetDto pet;


}
