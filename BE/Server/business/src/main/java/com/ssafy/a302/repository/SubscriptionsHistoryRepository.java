package com.ssafy.a302.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.SubscribtionHistory;
import com.ssafy.a302.domain.Users;
import org.springframework.data.repository.query.Param;

public interface SubscriptionsHistoryRepository extends JpaRepository<SubscribtionHistory, Integer>{
	List<SubscribtionHistory> findByUsers(Users user);
	}
