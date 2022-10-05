package com.ssafy.a302.response;

import java.util.ArrayList;
import java.util.List;

import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.FeedMaterial;
import com.ssafy.a302.domain.Snack;
import com.ssafy.a302.domain.SnackMaterial;

import lombok.Data;

@Data

public class FastSnack {
	String snackSno;
	List<Integer> materials;
	
	
	public FastSnack(Snack snack) {
		this.snackSno = snack.getSnackSno();
		this.materials = new ArrayList<Integer>();
		
		for(SnackMaterial sm : snack.getSnackMaterials()) {
			materials.add(sm.getMaterial().getMaterialNo());
		}
	} 
}
