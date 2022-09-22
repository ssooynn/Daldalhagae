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
@Table(name = "SUBSCRIBTION")
public class Subscribtion {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "SUBSCRIBTION_NO")
	private int subscribtionNo;
	@Column(name = "NAME")
	private String name;
	@Column(name = "DESCRIBTION")
	private String describtion;
	@Column(name = "PRICE")
	private int price;
	@Column(name = "IMAGE")
	private String image;
	
	@OneToMany(mappedBy = "subscribtion", fetch = FetchType.LAZY)
	private List<SubscribtionHistorySubscribtion> subscribtionHistorySubscribtions = new ArrayList<>();
	
	@OneToMany(mappedBy = "subscribtion", fetch = FetchType.LAZY)
	private List<SubscribtionProductType> subscribtionProductTypes = new ArrayList<>();
	
}
