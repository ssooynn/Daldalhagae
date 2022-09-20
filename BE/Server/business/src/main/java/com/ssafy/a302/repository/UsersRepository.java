package com.ssafy.a302.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.Users;

public interface UsersRepository extends JpaRepository<Users, String>{
	List<Users> findAll();
	boolean existsByKakaoId(String kakaoId);
}
