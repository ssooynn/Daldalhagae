package com.ssafy.a302.response;

import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.Purchase;
import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.PetDto;
import com.ssafy.a302.dto.PurchaseDto;
import com.ssafy.a302.dto.UsersDto;

public class ItemReviewRes {
    private int itemReviewNo;
    //mappedsuperclass
    private String item;
    private int rate;
    private String content;
    private String image;
    private UsersDto users;
    private PurchaseDto purchase;
    private PetDto pet;
}
