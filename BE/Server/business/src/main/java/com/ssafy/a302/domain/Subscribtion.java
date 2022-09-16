package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
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
@Table(name = "subscribtion")
public class Subscribtion {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int subscribtionNo;
	private String name;
	private String text;
	private int price;
	private String image;
	
	@OneToMany(mappedBy = "subscribtion")
	private List<SubscribtionHistorySubscribtion> subscribtionHistorySubscribtions = new ArrayList<>();
	
	@OneToMany(mappedBy = "subscribtion")
	private List<SubscribtionProductType> subscribtionProductTypes = new ArrayList<>();
	
}
