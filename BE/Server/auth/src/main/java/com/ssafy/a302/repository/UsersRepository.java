package com.ssafy.a302.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.Users;

public interface UsersRepository extends JpaRepository<Users, Integer>{
	boolean existsByKakaoId(String kakaoId);
}
