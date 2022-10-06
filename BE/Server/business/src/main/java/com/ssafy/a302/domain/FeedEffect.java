package com.ssafy.a302.domain;

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
@Table(name = "FEED_EFFECT")
public class FeedEffect {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "FEED_EFFECT_NO")
	private int feedEffectNo;
	
	@ManyToOne
	@JoinColumn(name="FEED_SNO")
	private Feed feed;
	
	@ManyToOne
	@JoinColumn(name="EFFECT_NO")
	private Effect effect;
}
