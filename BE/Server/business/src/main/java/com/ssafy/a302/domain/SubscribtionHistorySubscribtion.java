package com.ssafy.a302.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name = "SUBSCRIBTION_HISTORY_SUBSCRIBTION")
public class SubscribtionHistorySubscribtion {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "SUBSCRIBTION_HISTORY_SUBSCRIBTION_NO")
	private int subscribtionHistorySubscribtionNo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="SUBSCRIBTION_HISTORY_NO")
	private SubscribtionHistory subscribtionHistory;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="SUBSCRIBTION_NO")
	private Subscribtion subscribtion;
}
