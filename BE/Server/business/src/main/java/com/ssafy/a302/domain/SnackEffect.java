package com.ssafy.a302.domain;

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
@Table(name = "snackEffect")
public class SnackEffect {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int snackEffectNo;
	
	@ManyToOne
	@JoinColumn(name="snack_sno")
	private Snack snack;
	
	@ManyToOne
	@JoinColumn(name="effect_no")
	private Effect effect;
}
