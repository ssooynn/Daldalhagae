package com.ssafy.a302.serviceImpl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.ssafy.a302.domain.SubscribtionHistory;
import com.ssafy.a302.repository.SubscriptionsHistoryRepository;
import com.ssafy.a302.service.SubscriptionService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SubscriptionServiceImpl implements SubscriptionService {

	private final SubscriptionsHistoryRepository subscriptionsHistoryRepository;

	@Override
	public Map<String, Object> getSubInfo() {
		return null;
	}

	@Override
	public List<Map<String, Object>> getSubInfoAll() {
		return null;
	}

	@Override
	public void updateSubInfoAsCanceled(SubscribtionHistory subscribtionHistory) {
		subscriptionsHistoryRepository.saveAndFlush(subscribtionHistory);
	}

}
