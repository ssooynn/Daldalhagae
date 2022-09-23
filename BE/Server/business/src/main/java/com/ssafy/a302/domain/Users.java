package com.ssafy.a302.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name = "USERS")
public class Users {
	@Id
	@Column(name="USERS_SNO")
	private String usersSno;
	
	@Column(name="KAKAO_ID")
	private String kakaoId;
	
	@Column(name="EMAIL")
	private String email;
	
	@Column(name="NAME")
	private String name;
	
	@Column(name="PHONE")
	private String phone;
	
	@Column(name="ADDRESS")
	private String address;
	
	@OneToMany(mappedBy = "users", fetch = FetchType.LAZY)
	private Set<ItemReview> itemReviews = new HashSet<>();

	@OneToMany(mappedBy = "users", fetch = FetchType.LAZY)
	private Set<Pet> pets = new HashSet<>();
	
	@OneToMany(mappedBy = "users", fetch = FetchType.LAZY)
	private Set<PurchasePlan> purchasePlans = new HashSet<>();

	@OneToMany(mappedBy = "users", fetch = FetchType.LAZY)
	private Set<ServiceReview> serviceReviews = new HashSet<>();

	@OneToMany(mappedBy = "users", fetch = FetchType.LAZY)
	private Set<SubscribtionHistory> subscribtionHistorys = new HashSet<>();

	@OneToMany(mappedBy = "users", fetch = FetchType.LAZY)
	private Set<UserLog> userLogs = new HashSet<>();

	
	public Users(String usersSno,String kakaoId, String email, String name, String phone, String address) {
		super();
		this.usersSno = usersSno;
		this.kakaoId = kakaoId;
		this.email = email;
		this.name = name;
		this.phone = phone;
		this.address = address;
	}
	
	
}
