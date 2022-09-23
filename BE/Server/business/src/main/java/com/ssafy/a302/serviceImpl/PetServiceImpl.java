package com.ssafy.a302.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.PetEffect;
import com.ssafy.a302.domain.PetMaterial;
import com.ssafy.a302.dto.PetDto;
import com.ssafy.a302.repository.PetRepository;
import com.ssafy.a302.request.PetReq;
import com.ssafy.a302.response.PetRes;
import com.ssafy.a302.service.PetService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional()
public class PetServiceImpl implements PetService {

	private final PetRepository petRepository;

	public PetServiceImpl(PetRepository petRepository) {
		this.petRepository = petRepository;
	}

	@Override
	@Transactional
	public Map<String, List<PetRes>> getPetInfo(String userId) {

		Map<String, List<PetRes>> pets = new HashMap<>();
		List<PetRes> list = new ArrayList<>();
		List<Pet> petList = petRepository.findPetById(userId);

		for(Pet pet : petList){
			Map<Integer, String> material = new HashMap<>();
			Map<Integer, String> effect = new HashMap<>();
			for(PetMaterial petMaterial : pet.getPetMaterials()){
				material.put(petMaterial.getMaterial().getMaterialNo(), petMaterial.getMaterial().getName());
			}
			for(PetEffect petEffect : pet.getPetEffects()){
				effect.put(petEffect.getEffect().getEffectNo(), petEffect.getEffect().getName());
			}
			list.add(new PetRes(pet, material, effect));
		}

		pets.put("pets", list);
		return pets;
	}


	@Override
	@Transactional
	public void updatePetInfo(PetReq petReq, MultipartFile image) {

	}

	@Override
	@Transactional
	public void addPetInfo(PetReq petReq, MultipartFile image) {

	}
}
