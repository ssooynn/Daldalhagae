package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name = "PARTICLE")
public class Particle {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="PARTICLE_NO")
	private int particleNo;
	@Column(name="NAME")
	private String name;
	
	@OneToMany(mappedBy = "particle", fetch = FetchType.LAZY)
	List<Feed> feeds = new ArrayList<>();
}
