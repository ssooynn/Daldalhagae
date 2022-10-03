package com.ssafy.a302.response;

import java.util.ArrayList;
import java.util.List;
import com.ssafy.a302.domain.ItemReview;
import com.ssafy.a302.domain.Toy;
import com.ssafy.a302.repository.ItemReviewRepository;

import lombok.Data;

@Data
public class RecoToyRes {
	private String sno;
	private String name;
	private String image;
	private String materials;
	private String effects;
	private int reviewNum;
	private List<ItemReviewRes> itemReviewResList;

	public RecoToyRes(Toy toy, String imagePath, ItemReviewRepository itemReviewRep) {
		this.sno = toy.getToySno();
		this.name = toy.getName();
		this.image = toy.getImage();
		this.materials =toy.getMaterial();
		this.effects =toy.getEffect();
		this.itemReviewResList = new ArrayList<ItemReviewRes>();
		
		List<ItemReview> itemList = itemReviewRep.findTop2ByItemSno(this.sno);
		this.reviewNum = itemReviewRep.countByItemSno(this.sno);
		for(ItemReview ir : itemList) {
			this.itemReviewResList.add(new ItemReviewRes(ir, imagePath, this.name));
		}
	}

}
