package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@ToString
@Table(name = "FEED")
public class Feed extends Item{
	@Id
	@Column(name ="FEED_SNO")
	private String feedSno;
	//Item에서 상속
//	@Column(name ="NAME")
//	private String name;
//	@Column(name ="IMAGE")
//	private String image;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "GRADE_NO")
	private Grade grade;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "PARTICLE_NO")
	private Particle particle;
	
	@OneToMany(mappedBy = "feed", fetch = FetchType.LAZY)
	private List<FeedEffect> feedEffects = new ArrayList<>();
	
	@OneToMany(mappedBy = "feed", fetch = FetchType.LAZY)
	private List<FeedMaterial> feedMaterials = new ArrayList<>();

	@OneToMany(mappedBy = "feed", fetch = FetchType.LAZY)
	private List<FeedTarget> feedTargets = new ArrayList<>();

}
