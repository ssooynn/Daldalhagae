package com.ssafy.a302.response;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.Snack;
import com.ssafy.a302.domain.Toy;

public class RecoToyRes {
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
