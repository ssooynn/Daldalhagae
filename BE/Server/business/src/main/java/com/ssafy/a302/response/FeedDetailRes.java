package com.ssafy.a302.response;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.FeedEffect;
import com.ssafy.a302.domain.FeedMaterial;
import com.ssafy.a302.domain.FeedTarget;

import lombok.Data;

@Data
public class FeedDetailRes {
	private String sno;
	private String name;
	private String image;
	private List<String> effects;
	private List<String> targets;
	private List<String> materials;
	private String particle;
	private String grade;
	
	public FeedDetailRes(Feed feed) {
		this.sno= feed.getFeedSno();
		this.name = feed.getName();
		this.image =feed.getImage();
		this.particle = feed.getParticle().getName();
		this.grade = feed.getGrade().getName();
		effects= new ArrayList<String>();
		targets =new ArrayList<String>();
		materials = new ArrayList<String>();
		
		for(FeedEffect feedEffect: feed.getFeedEffects()) {
			effects.add(feedEffect.getEffect().getName());
		}
		
		for(FeedTarget feedTarget: feed.getFeedTargets()) {
			targets.add(feedTarget.getTarget().getName());
		}
		
		for(FeedMaterial feedMaterial: feed.getFeedMaterials()) {
			materials.add(feedMaterial.getMaterial().getName());
		}
		
	}
}
