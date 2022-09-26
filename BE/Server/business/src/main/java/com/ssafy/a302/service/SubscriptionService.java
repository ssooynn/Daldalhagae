package com.ssafy.a302.service;

import java.util.List;
import java.util.Map;

import com.ssafy.a302.domain.SubscribtionHistory;

public interface SubscriptionService {
	Map<String, Object> getSubInfo();
	List<Map<String, Object>> getSubInfoAll();
	void updateSubInfoAsCanceled(SubscribtionHistory subscribtionHistory);
}
