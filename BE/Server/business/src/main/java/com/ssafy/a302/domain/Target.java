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
@Table(name = "TARGET")
public class Target {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "TARGET_NO")
	private int targetNo;
	
	@Column(name = "NAME")
	private String name;
	
	@OneToMany(mappedBy = "target", fetch = FetchType.LAZY)
	private List<FeedTarget> feedTargets = new ArrayList<>();
	
	@OneToMany(mappedBy = "target", fetch = FetchType.LAZY)
	private List<Pet> pets = new ArrayList<>();
	
	@OneToMany(mappedBy = "target", fetch = FetchType.LAZY)
	private List<SnackTarget> snackTargets = new ArrayList<>();
	
}
