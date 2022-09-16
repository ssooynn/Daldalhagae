package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
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
@Table(name = "snack")
public class Snack {
	@Id
	private String snackSno;
	private String name;
	private String image;
	
	@OneToMany(mappedBy = "snack")
	private List<SnackEffect> snackEffects = new ArrayList<>();

	@OneToMany(mappedBy = "snack")
	private List<SnackMaterial> snackMaterials = new ArrayList<>();

	@OneToMany(mappedBy = "snack")
	private List<SnackTarget> snackTargets = new ArrayList<>();
}
