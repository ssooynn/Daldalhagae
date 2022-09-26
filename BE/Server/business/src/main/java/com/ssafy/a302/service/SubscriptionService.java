package com.ssafy.a302.service;

import java.util.List;
import java.util.Map;

import com.ssafy.a302.domain.SubscribtionHistory;

public interface SubscriptionService {
	List<Map<String, Object>> getSubInfo(String userId, int n);
	void updateSubInfoAsCanceled(String historyId);
}
