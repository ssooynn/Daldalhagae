package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "FEED")
public class Feed {
	@Id
	@Column(name ="FEED_SNO")
	private String feedSno;
	@Column(name ="NAME")
	private String name;
	@Column(name ="IMAGE")
	private String image;
	
	@ManyToOne
	@JoinColumn(name = "GRADE_NO")
	private Grade grade;
	
	@ManyToOne
	@JoinColumn(name = "PARTICLE_NO")
	private Particle particle;
	
	@OneToMany(mappedBy = "feed")
	private List<FeedEffect> feedEffects = new ArrayList<>();
	
	@OneToMany(mappedBy = "feed")
	private List<FeedMaterial> feedMaterials = new ArrayList<>();

	@OneToMany(mappedBy = "feed")
	private List<FeedTarget> feedTargets = new ArrayList<>();

}
