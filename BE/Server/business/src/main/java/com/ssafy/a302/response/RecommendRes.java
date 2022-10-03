package com.ssafy.a302.response;

import java.util.ArrayList;
import java.util.List;

import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.Snack;
import com.ssafy.a302.domain.Toy;
import com.ssafy.a302.repository.ItemReviewRepository;

import lombok.Data;

@Data
public class RecommendRes {
	private List<RecoFeedRes> feeds;
	private List<RecoSnacksRes> snacks;
	private List <RecoToyRes> toys;
	private int paymentNo;


	public RecommendRes(List<Feed> feeds, List<Snack> snacks, List<Toy> toys, String imagePath, ItemReviewRepository itemReviewRep,int paymentNo) {
		super();
		this.feeds = new ArrayList<>();
		this.snacks = new ArrayList<>();
		this.toys = new ArrayList<>();


		 for(Snack snack : snacks) {
		 	this.snacks.add(new RecoSnacksRes(snack, imagePath, itemReviewRep));
		 }
		 for(Toy toy : toys) {
		 	this.toys.add(new RecoToyRes(toy, imagePath, itemReviewRep));
		 }
		 for(Feed feed : feeds) {
		 	this.feeds.add(new RecoFeedRes(feed, imagePath, itemReviewRep));
		 }

		this.paymentNo = paymentNo;

	}


}
