package com.ssafy.a302.response;

import com.ssafy.a302.domain.Snack;

import lombok.Data;

@Data
public class SnackShortRes {
	private String snackSno;
	private String name;
	private String image;
	
	public SnackShortRes(Snack snack) {
		this.snackSno = snack.getSnackSno();
		this.name=snack.getName();
		this.image = snack.getImage();
	}
}
