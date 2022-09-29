package com.ssafy.a302.serviceImpl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.a302.common.FileUpload;
import com.ssafy.a302.common.RandomKey;
import com.ssafy.a302.domain.Effect;
import com.ssafy.a302.domain.Material;
import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.PetEffect;
import com.ssafy.a302.domain.PetMaterial;
import com.ssafy.a302.domain.Target;
import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.PetDto;
import com.ssafy.a302.repository.EffectRepository;
import com.ssafy.a302.repository.MaterialRepository;
import com.ssafy.a302.repository.PetEffectRepository;
import com.ssafy.a302.repository.PetMaterialRepository;
import com.ssafy.a302.repository.PetRepository;
import com.ssafy.a302.repository.TargetRepository;
import com.ssafy.a302.repository.UsersRepository;
import com.ssafy.a302.request.PetReq;
import com.ssafy.a302.request.SignUpPetReq;
import com.ssafy.a302.response.PetRes;
import com.ssafy.a302.service.PetService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class PetServiceImpl implements PetService {
	private final Logger logger = LoggerFactory.getLogger(PetServiceImpl.class);
	private final PetRepository petRepository;
	private final FileUpload fileUpload;
	private final UsersRepository usersRep;
	private final TargetRepository targetRep;
	private final MaterialRepository materialRep;
	private final EffectRepository effectRep;
	private final PetMaterialRepository petMaterialRep;
	private final PetEffectRepository petEffectRep;
	private final RandomKey randomKey;

	@Override
	@Transactional
	public Map<String, List<PetRes>> getPetInfo(String userId) {

		Map<String, List<PetRes>> petsInfo = new HashMap<>();
		List<PetRes> list = new ArrayList<>();
		List<Pet> petList = petRepository.findPetById(userId);

		for (Pet pet : petList) {
			Map<Integer, String> material = new HashMap<>();
			Map<Integer, String> effect = new HashMap<>();
			for (PetMaterial petMaterial : pet.getPetMaterials()) {
				material.put(petMaterial.getMaterial().getMaterialNo(), petMaterial.getMaterial().getName());
			}
			for (PetEffect petEffect : pet.getPetEffects()) {
				effect.put(petEffect.getEffect().getEffectNo(), petEffect.getEffect().getName());
			}
			list.add(new PetRes(pet, material, effect));
		}

		petsInfo.put("pets", list);
		return petsInfo;
	}

	@Override
	@Transactional
	public Map<String, PetRes> getPetInfoByPetId(String petId) {

		Map<String, PetRes> petInfo = new HashMap<>();
		Pet pet = petRepository.findPetByPetId(petId);

		Map<Integer, String> material = new HashMap<>();
		Map<Integer, String> effect = new HashMap<>();
		for (PetMaterial petMaterial : pet.getPetMaterials()) {
			material.put(petMaterial.getMaterial().getMaterialNo(), petMaterial.getMaterial().getName());
		}
		for (PetEffect petEffect : pet.getPetEffects()) {
			effect.put(petEffect.getEffect().getEffectNo(), petEffect.getEffect().getName());
		}

		petInfo.put("pets", new PetRes(pet, material, effect));
		return petInfo;
	}

	@Override
	@Transactional
	public void updatePetInfo(String usersSno, SignUpPetReq signUpPetReq, MultipartFile image)
			throws IllegalStateException, IOException {
		logger.info("---유저 찾기---");
		Users users = usersRep.findByUsersSno(usersSno);
		logger.info("---타겟 찾기---");
		Target target = targetRep.findByTargetNo(signUpPetReq.getTargetNo());
		Pet prePet = petRepository.findByPetSno(signUpPetReq.getPetSno());

		logger.info("---기존 이미지 삭제 및 수정---");
		if(signUpPetReq.getImageFlag()!=0) {
			fileUpload.petImageUpdate(prePet.getImage(), image, signUpPetReq);
		}else {
			signUpPetReq.setImage(prePet.getImage());
		}
		signUpPetReq.birthToTargetNo();
		logger.info("---Pet entity 만들기---");
		Pet pet = signUpPetReq.transforPet(users, target);

		logger.info("---기존 원료 삭제---");
		petMaterialRep.deleteByPet(pet);
		logger.info("---기존 효능 삭제---");
		petEffectRep.deleteByPet(pet);
		logger.info("---펫 수정---");
		petRepository.saveAndFlush(pet);

		List<Integer> materials = signUpPetReq.getMaterials();
		List<Integer> effects = signUpPetReq.getEffects();
		List<PetMaterial> petMaterials = new ArrayList<>();
		List<PetEffect> petEffects = new ArrayList<>();
		for (int materialNo : materials) {
			Material material = materialRep.findByMaterialNo(materialNo);
			petMaterials.add(new PetMaterial(pet, material));
		}
		for (int effectNo : effects) {
			Effect effect = effectRep.findByEffectNo(effectNo);
			petEffects.add(new PetEffect(pet, effect));
		}

		logger.info("---원료 추가---");
		petMaterialRep.saveAll(petMaterials);
		logger.info("---효능 추가---");
		petEffectRep.saveAll(petEffects);

	}

	/* 펫 추가 */
	@Override
	@Transactional
	public void addPetInfo(String usersSno, SignUpPetReq signUpPetReq, MultipartFile image)
			throws IllegalStateException, IOException {
		logger.info("---유저 찾기---={}", usersSno);
		Users users = usersRep.findByUsersSno(usersSno);

		logger.info("---펫 저장 시작---");
		String petSno = "p" + randomKey.createKey();
		Set<String> petSnoSet = new HashSet<String>();
		petSnoSet.add(petSno);
		while (petRepository.existsByPetSno(petSno)) {
			while (!petSnoSet.add(petSno)) {
				petSno = "p" + randomKey.createKey();
			}
		}
		signUpPetReq.setPetSno(petSno);
		if (!(image == null))
			fileUpload.petImageUpload(image, signUpPetReq);
		signUpPetReq.birthToTargetNo();
		Target target = targetRep.findByTargetNo(signUpPetReq.getTargetNo());
		Pet pet = signUpPetReq.transforPet(users, target);
		petRepository.saveAndFlush(pet);
		logger.info("---펫 저장 끝---");

		List<Integer> materials = signUpPetReq.getMaterials();
		List<Integer> effects = signUpPetReq.getEffects();
		List<PetMaterial> petMaterials = new ArrayList<>();
		List<PetEffect> petEffects = new ArrayList<>();
		logger.info("---효능, 원료 넣기 시작---");
		for (int materialNo : materials) {
			Material material = materialRep.findByMaterialNo(materialNo);
			petMaterials.add(new PetMaterial(pet, material));
		}
		for (int effectNo : effects) {
			Effect effect = effectRep.findByEffectNo(effectNo);
			petEffects.add(new PetEffect(pet, effect));
		}
		petMaterialRep.saveAll(petMaterials);
		petEffectRep.saveAll(petEffects);
		logger.info("---효능, 원료 넣기 끝---");

	}
}
