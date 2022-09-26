package com.ssafy.a302.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ssafy.a302.domain.Pet;
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
	
	
	@Override
	public SubDetailRes subDetail(String usersSno) {
		List<Pet> pets = petRep.findPetById(usersSno);
		
		return null;
	}

}
