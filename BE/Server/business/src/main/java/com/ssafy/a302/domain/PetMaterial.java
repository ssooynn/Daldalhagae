package com.ssafy.a302.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name = "PET_MATERIAL")
public class PetMaterial {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "PET_MATERIAL_NO")
	private int petMaterialNo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="PET_SNO")
	private Pet pet;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="MATERIAL_NO")
	private Material material;
}
