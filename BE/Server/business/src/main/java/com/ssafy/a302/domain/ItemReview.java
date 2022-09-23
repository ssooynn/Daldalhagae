package com.ssafy.a302.domain;

import javax.persistence.*;

import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "ITEM_REVIEW")
public class ItemReview {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
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
}
