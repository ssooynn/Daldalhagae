package com.ssafy.a302.repository;

import com.ssafy.a302.domain.SubscribtionHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SubscribtionHistoryRepository extends JpaRepository<SubscribtionHistory,Integer> {
    List<SubscribtionHistory> findByUsers_UsersSno(@Param("usersSno")String usersSno);
}
