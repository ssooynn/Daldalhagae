package com.ssafy.a302.domain;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "EFFECT")
public class Effect {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "EFFECT_NO")
	private int effectNo;
	
	@Column(name = "NAME")
	private String name;
	
	@OneToMany(mappedBy = "effect")
	private List<FeedEffect> feedEffects = new ArrayList<>();

	@OneToMany(mappedBy = "effect")
	private List<PetEffect> petEffects = new ArrayList<>();

	@OneToMany(mappedBy = "effect")
	private List<SnackEffect> snackEffects = new ArrayList<>();
}
