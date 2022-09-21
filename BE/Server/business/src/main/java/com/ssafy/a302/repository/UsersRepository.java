package com.ssafy.a302.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.repository.custom.UsersRepositoryCustom;

public interface UsersRepository extends JpaRepository<Users, String>,UsersRepositoryCustom{
	List<Users> findAll();
	boolean existsByKakaoId(String kakaoId);
	Users findByUsersSno(String usersSno);
}
