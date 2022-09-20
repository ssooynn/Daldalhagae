package com.ssafy.a302.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.UsersDto;

public interface UsersRepository extends JpaRepository<Users, Integer>{
	List<Users> findAll();
	boolean existsByKakaoId(String kakaoId);
	UsersDto findByUsersSno(String usersSno);
}
