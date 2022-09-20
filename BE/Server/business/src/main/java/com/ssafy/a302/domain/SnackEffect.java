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
@Table(name = "SNACK_EFFECT")
public class SnackEffect {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "SNACK_EFFECT_NO")
	private int snackEffectNo;
	
	@ManyToOne
	@JoinColumn(name="SNACK_SNO")
	private Snack snack;
	
	@ManyToOne
	@JoinColumn(name="EFFECT_NO")
	private Effect effect;
}
