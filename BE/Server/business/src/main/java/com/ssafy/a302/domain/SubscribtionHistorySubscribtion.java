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
@Table(name = "subscribtionHistorySubscribtion")
public class SubscribtionHistorySubscribtion {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int subscribtionHistorySubscribtionNo;
	
	@ManyToOne
	@JoinColumn(name="subscribtion_history_no")
	private SubscribtionHistory subscribtionHistory;
	
	@ManyToOne
	@JoinColumn(name="subscribtion_no")
	private Subscribtion subscribtion;
}
