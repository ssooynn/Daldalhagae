package com.ssafy.a302.domain;

import java.util.Date;

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
@Table(name = "serviceReview")
public class ServiceReview {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int serviceReviewNo;
	private int rate;
	private String content;
	private String image;
	
	@ManyToOne
	@JoinColumn(name = "user_sno")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "subscribtion_history_no")
	private SubscribtionHistory subscribtionHistory;
}
