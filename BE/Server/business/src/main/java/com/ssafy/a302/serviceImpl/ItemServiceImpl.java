package com.ssafy.a302.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.Snack;
import com.ssafy.a302.repository.FeedRepository;
import com.ssafy.a302.repository.SnackRepository;
import com.ssafy.a302.response.FastFeed;
import com.ssafy.a302.response.FastSnack;
import com.ssafy.a302.response.FeedShortRes;
import com.ssafy.a302.service.ItemService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService{
	private final FeedRepository feedRep;
	private final SnackRepository snackRep;
	@Override
	public List<FastFeed> getFeed() {
		List<Feed> feedList = feedRep.findAll();
		List<FastFeed> fastList = new ArrayList<FastFeed>();
		
		for(Feed feed : feedList) {
			fastList.add(new FastFeed(feed));
		}
		
		
		return fastList;
	}

	@Override
	public List<FastSnack> getSnack() {
		List<Snack> snackList = snackRep.findAll();
		List<FastSnack> fastList = new ArrayList<FastSnack>();
		
		for(Snack snack : snackList) {
			fastList.add(new FastSnack(snack));
		}
		
		return fastList;
	}
	
	
	

}
