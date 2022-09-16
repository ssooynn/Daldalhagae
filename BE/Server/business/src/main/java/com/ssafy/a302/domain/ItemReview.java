package com.ssafy.a302.domain;

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
@Table(name = "itemReview")
public class ItemReview {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int itemReviewNo;
	private String itemSno;
	private int rate;
	private String content;
	private String image;
	
	@ManyToOne
	@JoinColumn(name = "user_sno")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "purchase_no")
	private Purchase purchase;
	
	@ManyToOne
	@JoinColumn(name = "pet_sno")
	private Pet pet;
	
}
