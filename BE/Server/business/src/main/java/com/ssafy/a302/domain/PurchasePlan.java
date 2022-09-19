package com.ssafy.a302.domain;

import java.util.Date;

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
@Table(name = "PURCHASE_PLAN")
public class PurchasePlan {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "PURCHASE_PLAN_NO")
	private int purchasePlanNo;
	@Column(name = "ITEM_SNO")
	private String itemSno;
	
	@ManyToOne
	@JoinColumn(name="PET_SNO")
	private Pet pet;
	
	@ManyToOne
	@JoinColumn(name="USERS_SNO")
	private Users users;
	
}
