package com.ssafy.a302.domain;

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
@Table(name = "FEED_TARGET")
public class FeedTarget {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "FEED_TARGET_NO")
	private int feedTargetNo;
	
	@ManyToOne
	@JoinColumn(name="FEED_SNO")
	private Feed feed;
	
	@ManyToOne
	@JoinColumn(name="TARGET_NO")
	private Target target;
}
