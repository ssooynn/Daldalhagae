package com.ssafy.a302.response;

import java.util.ArrayList;
import java.util.List;
import com.ssafy.a302.domain.ItemReview;
import com.ssafy.a302.domain.Snack;
import com.ssafy.a302.domain.SnackEffect;
import com.ssafy.a302.domain.SnackMaterial;
import com.ssafy.a302.domain.SnackTarget;
import com.ssafy.a302.repository.ItemReviewRepository;

import lombok.Data;

@Data
public class RecoSnacksRes {
	private String sno;
	private String name;
	private String image;
	private List<String> materials;
	private List<String> effects;
	private List<String> targets;
	private int reviewNum;
	private List<ItemReviewRes> itemReviewResList;
	

	public RecoSnacksRes(Snack snack, String imagePath, ItemReviewRepository itemReviewRep) {
		this.sno = snack.getSnackSno();
		this.name = snack.getName();
		this.image = snack.getImage();
		this.materials = new ArrayList<String>();
		this.effects = new ArrayList<String>();
		this.targets = new ArrayList<String>();
		this.itemReviewResList = new ArrayList<ItemReviewRes>();
		
		
		for(SnackMaterial sm : snack.getSnackMaterials()) {
			this.materials.add(sm.getMaterial().getName());
		}
		
		for(SnackEffect se : snack.getSnackEffects()) {
			this.effects.add(se.getEffect().getName());
		}
		
		for(SnackTarget st : snack.getSnackTargets()) {
			this.materials.add(st.getTarget().getName());
		}
		
		List<ItemReview> itemList = itemReviewRep.findTop2ByItemSno(this.sno);
		this.reviewNum = itemReviewRep.countByItemSno(this.sno);
		for(ItemReview ir : itemList) {
			this.itemReviewResList.add(new ItemReviewRes(ir, imagePath, this.name));
		}
	}
}
