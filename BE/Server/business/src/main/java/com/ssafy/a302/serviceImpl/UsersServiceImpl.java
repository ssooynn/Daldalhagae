package com.ssafy.a302.serviceImpl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.a302.common.FilePath;
import com.ssafy.a302.common.FileUpload;
import com.ssafy.a302.common.RandomKey;
import com.ssafy.a302.domain.Effect;
import com.ssafy.a302.domain.Material;
import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.PetEffect;
import com.ssafy.a302.domain.PetMaterial;
import com.ssafy.a302.domain.Target;
import com.ssafy.a302.domain.Users;
import com.ssafy.a302.domain.UsersLog;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.repository.EffectRepository;
import com.ssafy.a302.repository.MaterialRepository;
import com.ssafy.a302.repository.PetEffectRepository;
import com.ssafy.a302.repository.PetMaterialRepository;
import com.ssafy.a302.repository.PetRepository;
import com.ssafy.a302.repository.TargetRepository;
import com.ssafy.a302.repository.UsersLogRepository;
import com.ssafy.a302.repository.UsersRepository;
import com.ssafy.a302.request.SignUpPetReq;
import com.ssafy.a302.request.SignUpReq;
import com.ssafy.a302.response.MyPageRes;
import com.ssafy.a302.service.UsersService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsersServiceImpl implements UsersService {
	private final Logger logger = LoggerFactory.getLogger(UsersServiceImpl.class);
	private final UsersRepository usersRep;
	private final UsersLogRepository usersLogRep;
	private final RandomKey randomKey;
	private final PetRepository petRepository;
	private final FileUpload fileUpload;
	private final TargetRepository targetRep;
	private final MaterialRepository materialRep;
	private final EffectRepository effectRep;
	private final PetMaterialRepository petMaterialRep;
	private final PetEffectRepository petEffectRep;
	private final FilePath filePath;
	@Override
	public boolean existsByKakaoId(String kakaoId) {
		return usersRep.existsByKakaoId(kakaoId);
	}

	@Override
	public List<Users> findAll() {
		List<Users> usersList = usersRep.findAll();
		return usersList;
	}

	/* 회원가입 */
	@Override
	@Transactional
	public boolean SignUp(SignUpReq signUpReq,List<SignUpPetReq> signUpPetReqs, List<MultipartFile> images) throws Exception {
		if (usersRep.existsByKakaoId(signUpReq.getKakaoId()))
			throw new Exception();
		String usersSno = "u"+randomKey.createKey();
		Set<String> usersSnoSet = new HashSet<String>();
		usersSnoSet.add(usersSno);
		while(usersRep.existsByUsersSno(usersSno)) {
			while(!usersSnoSet.add(usersSno)) {
				usersSno = "p"+randomKey.createKey();
			}
		}
		signUpReq.setUsersSno(usersSno);
		Users users = signUpReq.transforUsers();
		usersRep.saveAndFlush(users);
		UsersLog usersLog = new UsersLog(users, new Date());
		usersLogRep.saveAndFlush(usersLog);
		
		for (int i = 0; i < signUpPetReqs.size(); i++) {
			SignUpPetReq signUpPetReq = signUpPetReqs.get(i);
			String petSno = "p"+randomKey.createKey();
			Set<String> petSnoSet = new HashSet<String>();
			petSnoSet.add(petSno);
			while(petRepository.existsByPetSno(petSno)) {
				while(!petSnoSet.add(petSno)) {
					petSno = "p"+randomKey.createKey();
				}
			}
			signUpPetReq.setPetSno(petSno);
			
			Target target = targetRep.findByTargetNo(signUpPetReq.getTargetNo());
			logger.info("---펫 저장 시작---");
			if (!(images.isEmpty())) {
				logger.info("----이미지 넣기 ----");
				fileUpload.petsImageUpload(images, signUpPetReq);
			}
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
			logger.info("---효능, 원료 넣기 끝---");
			petMaterialRep.saveAll(petMaterials);
			petEffectRep.saveAll(petEffects);

			
		}
		return true;
		
	}

	/* 회원 정보 조회*/
	@Override
	public UsersDto userInfo(String usersSno) {
		UsersDto usersDto = new UsersDto();
		usersDto.setAll(usersRep.findByUsersSno(usersSno));
		return usersDto;
	}

	/* 회원 정보 수정 */
	@Override
	public void usersUpdate(UsersDto usersDto) {
		Users users = usersDto.transfor();
		usersRep.save(users);
		UsersLog usersLog = usersLogRep.findByUsers(users);
		usersLog.updateuUerUpdatedAt(new Date());
		usersLogRep.save(usersLog);
		
	}

	/* 회원 탈퇴 */
	@Override
	public void usersWithdrow(String usersSno) {
		Users users = usersRep.findByUsersSno(usersSno);
		UsersLog usersLog = usersLogRep.findByUsers(users);
		usersLog.updateuUserDeletedAt(new Date());
		usersLogRep.save(usersLog);
		
	}

	/* 마이페이지 */
	@Override
	public MyPageRes myPageInfo(String usersSno) {
		Users users = usersRep.findAndPetsByUsersSno(usersSno);
		MyPageRes myPageRes = new MyPageRes(users, filePath.getPetImageLoadPath());
		return myPageRes;
	}
	
	

}
