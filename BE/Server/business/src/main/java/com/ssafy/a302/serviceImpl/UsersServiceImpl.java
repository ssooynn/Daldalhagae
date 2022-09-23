package com.ssafy.a302.serviceImpl;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.a302.common.RandomKey;
import com.ssafy.a302.common.Utils;
import com.ssafy.a302.domain.Users;
import com.ssafy.a302.domain.UsersLog;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.dto.UsersLogDto;
import com.ssafy.a302.repository.UsersLogRepository;
import com.ssafy.a302.repository.UsersRepository;
import com.ssafy.a302.request.SignUpReq;
import com.ssafy.a302.response.UsersInfoRes;
import com.ssafy.a302.service.UsersService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsersServiceImpl implements UsersService {
	private final UsersRepository usersRep;
	private final UsersLogRepository usersLogRep;
	
	private final RandomKey randomKey;
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
	public String SignUp(SignUpReq signUpReq) throws Exception {
		if (usersRep.existsByKakaoId(signUpReq.getKakaoId()))
			throw new Exception();
		signUpReq.setUsersSno("u"+randomKey.createKey());
		Users users = signUpReq.transforUsers();
		usersRep.save(users);
		
		UsersLog usersLog = new UsersLog(users, new Date());
		usersLogRep.save(usersLog);
		
		return users.getUsersSno();
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
	
	

}
