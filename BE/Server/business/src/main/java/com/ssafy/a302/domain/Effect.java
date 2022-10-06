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

import org.hibernate.annotations.BatchSize;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Table(name = "EFFECT")
public class Effect {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "EFFECT_NO")
	private int effectNo;
	
	@Column(name = "NAME")
	private String name;
	
	@BatchSize(size=30)
	@OneToMany(mappedBy = "effect", fetch = FetchType.LAZY)
	private List<FeedEffect> feedEffects = new ArrayList<>();

	@BatchSize(size=30)
	@OneToMany(mappedBy = "effect", fetch = FetchType.LAZY)
	private List<PetEffect> petEffects = new ArrayList<>();

	@BatchSize(size=30)
	@OneToMany(mappedBy = "effect", fetch = FetchType.LAZY)
	private List<SnackEffect> snackEffects = new ArrayList<>();
}
