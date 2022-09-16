package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.List;

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
@Table(name = "feed")
public class Feed {
	@Id
	private String feedSno;
	private String name;
	private String image;
	
	@ManyToOne
	@JoinColumn(name = "grade_no")
	private Grade grade;
	
	@ManyToOne
	@JoinColumn(name = "particle_no")
	private Particle particle;
	
	@OneToMany(mappedBy = "feed")
	private List<FeedEffect> feedEffects = new ArrayList<>();
	
	@OneToMany(mappedBy = "feed")
	private List<FeedMaterial> feedMaterials = new ArrayList<>();

	@OneToMany(mappedBy = "feed")
	private List<FeedTarget> feedTargets = new ArrayList<>();

}
