package com.ssafy.a302.domain;

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
@Table(name = "feedTarget")
public class FeedTarget {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int feedTargetNo;
	
	@ManyToOne
	@JoinColumn(name="feed_sno")
	private Feed feed;
	
	@ManyToOne
	@JoinColumn(name="target_no")
	private Target target;
}
