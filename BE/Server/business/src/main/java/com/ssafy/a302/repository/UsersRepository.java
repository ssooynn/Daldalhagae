package com.ssafy.a302.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.repository.custom.UsersRepositoryCustom;
import com.ssafy.a302.response.UsersInfoRes;

public interface UsersRepository extends JpaRepository<Users, String>,UsersRepositoryCustom{
	List<Users> findAll();
	boolean existsByKakaoId(String kakaoId);
	boolean existsByUsersSno(String usersSno);
	Users findByUsersSno(String usersSno);
}
