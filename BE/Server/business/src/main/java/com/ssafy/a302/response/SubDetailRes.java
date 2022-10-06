package com.ssafy.a302.response;

import java.util.ArrayList;
import java.util.List;

import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.Snack;
import com.ssafy.a302.domain.Toy;

import lombok.Data;

@Data
public class SubDetailRes {
	private List<MyPagePetRes> pets;
	private List<FeedShortRes> feeds;
	private List<SnackShortRes> snacks;
	private List<ToyShortRes> toys;
	
	public SubDetailRes(List<Pet> pets, List<Feed> feeds, List<Snack> snacks, List<Toy> toys
			, String imagePath) {
		super();
		this.pets = new ArrayList<>();
		this.feeds = new ArrayList<>();
		this.snacks = new ArrayList<>();
		this.toys = new ArrayList<>();
		
		for(Pet pet : pets) {
			this.pets.add(new MyPagePetRes(pet, imagePath));
		}
		for(Snack snack : snacks) {
			this.snacks.add(new SnackShortRes(snack));
		}
		for(Toy toy : toys) {
			this.toys.add(new ToyShortRes(toy));
		}
		for(Feed feed : feeds) {
			this.feeds.add(new FeedShortRes(feed));
		}
		
	}
	
	
}
