package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

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
	
	@OneToOne(mappedBy = "subscribtion", fetch = FetchType.LAZY)
	private SubscribtionHistorySubscribtion subscribtionHistorySubscribtion;
	
	@OneToMany(mappedBy = "subscribtion", fetch = FetchType.LAZY)
	private List<SubscribtionProductType> subscribtionProductTypes = new ArrayList<>();
	
}
