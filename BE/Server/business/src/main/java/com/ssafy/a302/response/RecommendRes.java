package com.ssafy.a302.response;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.Snack;
import com.ssafy.a302.domain.SubscribtionHistory;
import com.ssafy.a302.domain.Toy;

public class RecommendRes {
	private List<RecoFeedRes> feeds;
	private List<RecoSnacksRes> snacks;
	private List <RecoToyRes> toys;
	private int paymentSno;


	public RecommendRes(List<Feed> feeds, List<Snack> snacks, List<Toy> toys, String imagePath) {
		super();
		this.feeds = new ArrayList<>();
		this.snacks = new ArrayList<>();
		this.toys = new ArrayList<>();


		// for(Snack snack : snacks) {
		// 	this.snacks.add(new RecoSnacksRes(snack));
		// }
		// for(Toy toy : toys) {
		// 	this.toys.add(new RecoToyRes(toy));
		// }
		// for(Feed feed : feeds) {
		// 	this.feeds.add(new RecoFeedRes(feed));
		// }

		this.paymentSno = 1;

	}


}
