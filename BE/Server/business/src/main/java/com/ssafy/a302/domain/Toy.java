package com.ssafy.a302.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Table(name = "TOY")
public class Toy extends Item{
	@Id
	@Column(name="TOY_SNO")
	private String toySno;
	//Item에서상속
//	@Column(name="NAME")
//	private String name;
//	@Column(name="IMAGE")
//	private String image;
	@Column(name="MATERIAL")
	private String material;
	@Column(name="EFFECT")
	private String effect;
}
