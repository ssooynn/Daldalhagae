package com.ssafy.a302.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.a302.domain.ItemReview;
import com.ssafy.a302.repository.FeedRepository;

import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;


@Data
@NoArgsConstructor
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
    
    
	public ItemReviewRes(ItemReview itemReview, String imagePath, String itemName ) {
		super();
		this.itemSno = itemReview.getItemSno();
		this.itemReviewNo = itemReview.getItemReviewNo();
		this.itemName = itemName;
		this.rate = itemReview.getRate();
		this.content = itemReview.getContent();
		if(itemReview.getImage() !=null && "".equals(itemReview.getImage())) {
			this.image = imagePath+itemReview.getImage();
		}
		this.date = itemReview.getDate();
		this.usersSno = itemReview.getUsers().getUsersSno();
		this.usersName = itemReview.getUsers().getName();
		this.petSno = itemReview.getPet().getPetSno();
		this.petName = itemReview.getPet().getName();
	}
	
	public ItemReviewRes(RecoReviewRes itemReview, String imagePath, String itemName ) {
		super();
		this.itemSno = itemReview.getItemSno();
		this.itemReviewNo = itemReview.getItemReviewNo();
		this.itemName = itemName;
		this.rate = itemReview.getRate();
		this.content = itemReview.getContent();
		if(itemReview.getImage() !=null && "".equals(itemReview.getImage())) {
			this.image = imagePath+itemReview.getImage();
		}
		this.date = itemReview.getDate();
		this.usersSno = itemReview.getUsersSno();
		this.usersName = itemReview.getUsersName();
		this.petSno = itemReview.getPetSno();
		this.petName = itemReview.getPetName();
	}

	
    

}
