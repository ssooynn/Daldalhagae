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
@Table(name = "MATERIAL")
public class Material {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="MATERIAL_NO")
	private int materialNo;
	
	@Column(name="NAME")
	private String name;
	
	@BatchSize(size=30)
	@OneToMany(mappedBy = "material", fetch = FetchType.LAZY)
	private List<FeedMaterial> feedMaterials = new ArrayList<>();

	@BatchSize(size=30)
	@OneToMany(mappedBy = "material", fetch = FetchType.LAZY)
	private List<PetMaterial> petMaterials = new ArrayList<>();

	@BatchSize(size=30)
	@OneToMany(mappedBy = "material", fetch = FetchType.LAZY)
	private List<SnackMaterial> snackMaterials = new ArrayList<>();
	
}
