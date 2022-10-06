package com.ssafy.a302.repository;

import com.ssafy.a302.domain.QSubscribtionProductType;
import com.ssafy.a302.domain.SubscribtionProductType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionProductTypeRepository extends JpaRepository<SubscribtionProductType, Integer> {
}
