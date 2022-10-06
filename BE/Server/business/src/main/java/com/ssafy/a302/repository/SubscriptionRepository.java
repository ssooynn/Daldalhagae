package com.ssafy.a302.repository;

import com.ssafy.a302.domain.Subscribtion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SubscriptionRepository extends JpaRepository<Subscribtion, Integer> {

    @Query(value = "select s from Subscribtion s where s.subscribtionNo = :subId")
    Subscribtion findById(int subId);
}
