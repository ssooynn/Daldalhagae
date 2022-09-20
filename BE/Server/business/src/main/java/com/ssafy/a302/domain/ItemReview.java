package com.ssafy.a302.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
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
	
	@ManyToOne
	@JoinColumn(name = "USERS_SNO")
	private Users users;
	
	@ManyToOne
	@JoinColumn(name = "PURCHASE_NO")
	private Purchase purchase;
	
	@ManyToOne
	@JoinColumn(name = "PET_SNO")
	private Pet pet;
	
}
