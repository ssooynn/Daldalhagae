package com.ssafy.a302.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ssafy.a302.common.FilePath;
import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.Snack;
import com.ssafy.a302.domain.Toy;
import com.ssafy.a302.repository.FeedRepository;
import com.ssafy.a302.repository.PetRepository;
import com.ssafy.a302.repository.SnackRepository;
import com.ssafy.a302.repository.ToyRepository;
import com.ssafy.a302.response.SubDetailRes;
import com.ssafy.a302.service.SubscribtionService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SubscribtionServiceImpl implements SubscribtionService{
	private final FeedRepository feedRep;
	private final SnackRepository snackRep;
	private final ToyRepository toyRep;
	private final PetRepository petRep;
	private final FilePath filePath;
	
	@Override
	public SubDetailRes subDetail(String usersSno) {
		List<Pet> pets = petRep.findByUsers_UsersSno(usersSno);
		List<Snack> snacks = snackRep.findTop10Rand();
		List<Toy> toys = toyRep.findTop10Rand();
		List<Feed> feeds = feedRep.findTop10Rand();
		SubDetailRes subDetailRes = new SubDetailRes(pets, feeds, snacks, toys, filePath.getPetImageLoadPath());
		return subDetailRes;
	}

}
