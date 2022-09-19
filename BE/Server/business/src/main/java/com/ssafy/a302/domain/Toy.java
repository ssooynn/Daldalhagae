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
public class Toy {
	@Id
	@Column(name="TOY_SNO")
	private String toySno;
	@Column(name="NAME")
	private String name;
	@Column(name="IMAGE")
	private String image;
	@Column(name="MATERIAL")
	private String material;
	@Column(name="EFFECT")
	private String effect;
}
