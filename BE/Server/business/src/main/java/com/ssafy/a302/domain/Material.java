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
@Table(name = "MATERIAL")
public class Material {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="MATERIAL_NO")
	private int materialNo;
	
	@Column(name="NAME")
	private String name;
	
	@OneToMany(mappedBy = "material")
	private List<FeedMaterial> feedMaterials = new ArrayList<>();

	@OneToMany(mappedBy = "material")
	private List<PetMaterial> petMaterials = new ArrayList<>();

	@OneToMany(mappedBy = "material")
	private List<SnackMaterial> snackMaterials = new ArrayList<>();
	
}
