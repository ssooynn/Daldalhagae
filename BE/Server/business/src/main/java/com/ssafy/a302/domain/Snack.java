package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name = "SNACK")
public class Snack extends Item{
	@Id
	@Column(name="SNACK_SNO")
	private String snackSno;
	//Item에서상속
//	@Column(name="NAME")
//	private String name;
//	@Column(name="IMAGE")
//	private String image;
	
	@BatchSize(size=30)
	@OneToMany(mappedBy = "snack", fetch = FetchType.LAZY)
	private List<SnackEffect> snackEffects = new ArrayList<>();
	
	@BatchSize(size=30)
	@OneToMany(mappedBy = "snack", fetch = FetchType.LAZY)
	private List<SnackMaterial> snackMaterials = new ArrayList<>();

	@BatchSize(size=30)
	@OneToMany(mappedBy = "snack", fetch = FetchType.LAZY)
	private List<SnackTarget> snackTargets = new ArrayList<>();
}
