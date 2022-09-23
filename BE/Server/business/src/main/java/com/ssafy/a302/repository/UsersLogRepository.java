package com.ssafy.a302.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.domain.UsersLog;

public interface UsersLogRepository extends JpaRepository<UsersLog, Integer>{
	UsersLog findByUsers(Users users);
}
