package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name = "SUBSCRIBTION_HISTORY")
public class SubscribtionHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="SUBSCRIBTION_HISTORY_NO")
	private int subscribtionHistoryNo;
	@Column(name="START_DATE")
	private Date startDate;
	@Column(name="END_DATE")
	private Date endDate;
	@Column(name="AUTO_PAYMENT_FLAG")
	private int autoPaymentFlag;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "USERS_SNO")
	private Users users;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "PET_SNO")
	private Pet pet;
	
	@OneToMany(mappedBy = "subscribtionHistory", fetch = FetchType.LAZY)
	private List<Purchase> purchases = new ArrayList<>();
	
	@OneToMany(mappedBy = "subscribtionHistory", fetch = FetchType.LAZY)
	private List<ServiceReview> serviceReviews = new ArrayList<>();

	@OneToMany(mappedBy = "subscribtionHistory", fetch = FetchType.LAZY)
	private List<SubscribtionHistorySubscribtion> subscribtionHistorySubscribtions = new ArrayList<>();
}
