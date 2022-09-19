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
@Table(name = "PET_EFFECT")
public class PetEffect {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "PET_EFFECT_NO")
	private int petEffectNo;
	
	@ManyToOne
	@JoinColumn(name = "PET_SNO")
	private Pet pet;

	@ManyToOne
	@JoinColumn(name = "EFFECT_NO")
	private Effect effect;
}