package com.ssafy.a302.response;

import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.Toy;

import lombok.Data;

@Data
public class FeedShortRes {
	private String feedSno;
	private String name;
	private String image;
	
	public FeedShortRes(Feed feed) {
		this.feedSno = feed.getFeedSno();
		this.name=feed.getName();
		this.image = feed.getImage();
	}
}
