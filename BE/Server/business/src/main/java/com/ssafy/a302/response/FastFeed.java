package com.ssafy.a302.response;

import java.util.ArrayList;
import java.util.List;

import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.FeedMaterial;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Data
@NoArgsConstructor
@Slf4j
public class FastFeed {
	String feedSno;
	List<Integer> materials;
	
	
	public FastFeed(Feed feed) {
		this.feedSno = feed.getFeedSno();
		this.materials = new ArrayList<Integer>();
		log.info("12222222222222222222222222 dsf {}", feed.getFeedMaterials());
		for(FeedMaterial fm : feed.getFeedMaterials()) {
			log.info("{}", fm.getMaterial().getMaterialNo());
			materials.add(fm.getMaterial().getMaterialNo());
		}
	} 
	
	
}
