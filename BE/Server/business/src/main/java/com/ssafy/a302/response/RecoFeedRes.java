package com.ssafy.a302.response;

import java.util.ArrayList;
import java.util.List;
import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.FeedEffect;
import com.ssafy.a302.domain.FeedMaterial;
import com.ssafy.a302.domain.FeedTarget;
import com.ssafy.a302.domain.ItemReview;
import com.ssafy.a302.repository.ItemReviewRepository;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RecoFeedRes {
	private String sno;
	private String name;
	private String image;
	private String particle;
	private String grade;
	private List<String> materials;
	private List<String> effects;
	private List<String> targets;
	private int reviewNum;
	private List<ItemReviewRes> itemReviewResList;
	
	
	public RecoFeedRes(Feed feed, String imagePath, ItemReviewRepository itemReviewRep) {
		super();
		this.sno = feed.getFeedSno();
		this.name = feed.getName();
		this.image = feed.getImage();
		this.particle = feed.getParticle().getName();
		this.grade = feed.getGrade().getName();
		this.materials = new ArrayList<String>();
		this.effects = new ArrayList<String>();
		this.targets = new ArrayList<String>();
		this.itemReviewResList = new ArrayList<ItemReviewRes>();
		
		
		for(FeedMaterial fm : feed.getFeedMaterials()) {
			this.materials.add(fm.getMaterial().getName());
		}
		
		for(FeedEffect fe : feed.getFeedEffects()) {
			this.effects.add(fe.getEffect().getName());
		}
		
		for(FeedTarget ft : feed.getFeedTargets()) {
			this.materials.add(ft.getTarget().getName());
		}
		
		List<ItemReview> itemList = itemReviewRep.findTop2ByItemSno(this.sno);
		this.reviewNum = itemReviewRep.countByItemSno(this.sno);
		for(ItemReview ir : itemList) {
			this.itemReviewResList.add(new ItemReviewRes(ir, imagePath, this.name));
		}
		
		
	}
	
	
}
