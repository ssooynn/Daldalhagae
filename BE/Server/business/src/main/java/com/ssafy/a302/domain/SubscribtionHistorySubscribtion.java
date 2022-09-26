package com.ssafy.a302.domain;

import java.util.Date;

import javax.persistence.*;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Table(name = "SUBSCRIBTION_HISTORY_SUBSCRIBTION")
public class SubscribtionHistorySubscribtion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SUBSCRIBTION_HISTORY_SUBSCRIBTION_NO")
	private int subscribtionHistorySubscribtionNo;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="SUBSCRIBTION_HISTORY_NO")
	private SubscribtionHistory subscribtionHistory;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="SUBSCRIBTION_NO")
	private Subscribtion subscribtion;


    public SubscribtionHistorySubscribtion(SubscribtionHistory subscriptionHistory, Subscribtion subscription) {
		this.subscribtionHistory = subscriptionHistory;
		this.subscribtion = subscription;
    }
}
