package com.ssafy.a302.response;

import java.util.List;
import java.util.Map;

public class RecoFeedRes {
	private String sno;
	private String name;
	private String image;
	private String particle;
	private String grade;
	private Map<Integer, String> materials;
	private Map<Integer, String> effects;
	private int reviewNum;
	private List<ItemReviewRes> itemReviewResList;
}
