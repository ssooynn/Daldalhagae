package com.ssafy.a302.domain;

import javax.persistence.*;

import com.ssafy.a302.repository.FeedRepository;
import com.ssafy.a302.response.ItemReviewRes;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "ITEM_REVIEW")
public class ItemReview {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ITEM_REVIEW_NO")
	private int itemReviewNo;
	@Column(name = "ITEM_SNO")
	private String itemSno;
	@Column(name = "RATE")
	private int rate;
	@Column(name = "CONTENT")
	private String content;
	@Column(name = "IMAGE")
	private String image;
	@Column(name = "CREATED_AT")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Date date;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "USERS_SNO")
	private Users users;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "PURCHASE_NO")
	private Purchase purchase;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "PET_SNO")
	private Pet pet;



	@Builder
	public ItemReview(int itemReviewNo, String itemSno, int rate, String content, String image, Users users, Purchase purchase, Pet pet) {
		this.itemReviewNo = itemReviewNo;
		this.itemSno = itemSno;
		this.rate = rate;
		this.content = content;
		this.image = image;
		this.users = users;
		this.purchase = purchase;
		this.pet = pet;
	}

	public ItemReviewRes toItemReviewRes(){
		ItemReviewRes itemReviewRes = new ItemReviewRes();
		itemReviewRes.setItemReviewNo(this.itemReviewNo);
		itemReviewRes.setItemSno(this.itemSno);
//		itemReviewRes.setItemName(); 여긴 서비스에서 넣어줘야함.
		itemReviewRes.setRate(this.rate);
		itemReviewRes.setContent(this.content);
		itemReviewRes.setImage(this.image);
		itemReviewRes.setUsersSno(this.users.getUsersSno());
		itemReviewRes.setUsersName(this.users.getName());
		itemReviewRes.setPetSno(this.pet.getPetSno());
		itemReviewRes.setPetName(this.pet.getName());
		itemReviewRes.setDate(this.date);
		return itemReviewRes;
	}
}
