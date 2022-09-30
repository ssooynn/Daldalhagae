package com.ssafy.a302.response;

import java.util.ArrayList;
import java.util.List;
import com.ssafy.a302.domain.Snack;
import com.ssafy.a302.domain.SnackEffect;
import com.ssafy.a302.domain.SnackMaterial;
import com.ssafy.a302.domain.SnackTarget;

import lombok.Data;

@Data
public class SnackDetailRes {
	private String sno;
	private String name;
	private String image;
	private List<String> effects;
	private List<String> targets;
	private List<String> materials;
	
	public SnackDetailRes(Snack snack) {
		this.sno= snack.getSnackSno();
		this.name = snack.getName();
		this.image =snack.getImage();
		effects= new ArrayList<String>();
		targets =new ArrayList<String>();
		materials = new ArrayList<String>();
		
		for(SnackEffect feedEffect: snack.getSnackEffects()) {
			effects.add(feedEffect.getEffect().getName());
		}
		
		for(SnackTarget feedTarget: snack.getSnackTargets()) {
			targets.add(feedTarget.getTarget().getName());
		}
		
		for(SnackMaterial feedMaterial: snack.getSnackMaterials()) {
			materials.add(feedMaterial.getMaterial().getName());
		}
		
	}
}
