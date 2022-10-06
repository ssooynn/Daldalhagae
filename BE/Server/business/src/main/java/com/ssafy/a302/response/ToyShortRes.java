package com.ssafy.a302.response;

import com.ssafy.a302.domain.Snack;
import com.ssafy.a302.domain.Toy;

import lombok.Data;

@Data
public class ToyShortRes {
	private String toySno;
	private String name;
	private String image;
	
	public ToyShortRes(Toy toy) {
		this.toySno = toy.getToySno();
		this.name=toy.getName();
		this.image = toy.getImage();
	}
}
