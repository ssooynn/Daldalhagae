package com.ssafy.a302.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.SubscribtionHistory;
import com.ssafy.a302.domain.Users;

public interface SubscriptionsHistoryRepository extends JpaRepository<SubscribtionHistory, Integer>{
	List<SubscribtionHistory> findByUsers(Users user);
}
