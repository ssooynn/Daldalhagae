package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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
@Table(name = "user")
public class User {
	@Id
	private String userSno;
	
	@Column
	private String kakaoId;
	
	@Column
	private String email;
	
	@Column
	private String name;
	
	@Column
	private String phone;
	
	@Column
	private String address;
	
	@OneToMany(mappedBy = "user")
	private List<ItemReview> itemReviews = new ArrayList<>();

	@OneToMany(mappedBy = "user")
	private List<Pet> pets = new ArrayList<>();
	
	@OneToMany(mappedBy = "user")
	private List<PurchasePlan> purchasePlans = new ArrayList<>();

	@OneToMany(mappedBy = "user")
	private List<ServiceReview> serviceReviews = new ArrayList<>();

	@OneToMany(mappedBy = "user")
	private List<SubscribtionHistory> subscribtionHistorys = new ArrayList<>();

	@OneToMany(mappedBy = "user")
	private List<UserLog> userLogs = new ArrayList<>();
}
