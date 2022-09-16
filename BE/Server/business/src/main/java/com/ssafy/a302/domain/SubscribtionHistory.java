package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Table(name = "subscribtionHistory")
public class SubscribtionHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int subscribtionHistoryNo;
	private Date startDate;
	private Date endDate;
	private int autoPaymentFlag;
	
	@ManyToOne
	@JoinColumn(name = "user_sno")
	private User user;

	@ManyToOne
	@JoinColumn(name = "pet_sno")
	private Pet pet;
	
	@OneToMany(mappedBy = "subscribtionHistory")
	private List<Purchase> purchases = new ArrayList<>();
	
	@OneToMany(mappedBy = "subscribtionHistory")
	private List<ServiceReview> serviceReviews = new ArrayList<>();

	@OneToMany(mappedBy = "subscribtionHistory")
	private List<SubscribtionHistorySubscribtion> subscribtionHistorySubscribtions = new ArrayList<>();
}
