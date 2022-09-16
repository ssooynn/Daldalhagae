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
@Table(name = "snackMaterial")
public class SnackMaterial {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int SnackMaterialNo;
	
	@ManyToOne
	@JoinColumn(name="snack_sno")
	private Snack snack;
	
	@ManyToOne
	@JoinColumn(name="material_no")
	private Material material;
}
