package com.ssafy.a302.dto;


import com.ssafy.a302.domain.ItemReview;
import com.ssafy.a302.domain.Pet;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemReviewDto {
	private int itemReviewNo;
	private String itemSno;
	private int rate;
	private String content;
	private String image;
	private UsersDto users;
	private PurchaseDto purchase;
	private PetDto pet;
	
}
