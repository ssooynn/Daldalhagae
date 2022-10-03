package com.ssafy.a302.response;

import java.util.List;
import java.util.Map;

import com.ssafy.a302.domain.Snack;

public class RecoSnacksRes {
	private String sno;
	private String name;
	private String image;
	private Map<Integer, String> materials;
	private Map<Integer, String> effects;
	private int reviewNum;
	private List<ItemReviewRes> itemReviewResList;

	public RecoSnacksRes(Snack snack, Map<Integer, String> materials, Map<Integer, String> effects ) {
		this.sno = snack.getSnackSno();
		this.name = snack.getName();
		this.image = snack.getImage();
		this.materials = materials;
		this.effects = effects;
	}
}
