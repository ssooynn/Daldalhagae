package com.ssafy.a302.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ssafy.a302.domain.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import com.ssafy.a302.repository.SubscriptionsHistoryRepository;
import com.ssafy.a302.service.SubscriptionService;

import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class SubscriptionServiceImpl implements SubscriptionService {

	private final SubscriptionsHistoryRepository subscriptionsHistoryRepository;

	@Override
	// 이미지 처리 안함
	public List<Map<String, Object>> getSubInfo(String userId, int n) {
		List<Map<String, Object>> list = new ArrayList<>();
		List<SubscribtionHistory> history;

		// 구독 히스토리 가져오기
		if(n == 0){
			// 0 이면 현재 구독 중인 히스토리만 가져오고
			history = subscriptionsHistoryRepository.findSubNowByUserId(userId);
		}else{
			// 1 이면 전체 구독 히스토리
			history = subscriptionsHistoryRepository.findSubAllByUserId(userId);
		}

		for (SubscribtionHistory sub: history) {
			Map<String, Object> map = new HashMap<>();
			// 1. subscriptionName
			map.put("subscriptionName", sub.getSubscribtionHistorySubscribtion().getSubscribtion().getName());

			// 2. subscriptionNum
			map.put("subscriptionNum", sub.getSubscribtionHistoryNo());

			// 2. price
			map.put("price", sub.getSubscribtionHistorySubscribtion().getSubscribtion().getPrice());

			// 3. Items
			List<Purchase> items = new ArrayList<>();
			List<Snack> snacks = new ArrayList<>();
			List<Feed> feeds = new ArrayList<>();
			List<Toy> toy = new ArrayList<>();
			for (Purchase purchase : sub.getPurchases()) {
				String sno = purchase.getItemSno();
				//FEED
				if(sno.charAt(0) == 'f'){
					feeds.add(subscriptionsHistoryRepository.findFeedInfo(sno));
				}//SNACK
				else if(sno.charAt(0) == 's'){
					snacks.add(subscriptionsHistoryRepository.findSnackInfo(sno));
				}//TOY
				else{
					toy.add(subscriptionsHistoryRepository.findToyInfo(sno));
				}
			}

			// 4. 그 외 정보
			map.put("feed", feeds);
			map.put("snack", snacks);
			map.put("toy", toy);

			map.put("petName", sub.getPet().getName());
			map.put("startDate", sub.getStartDate());
			map.put("endDate", sub.getEndDate());
			map.put("autoPaymentFlag", sub.getAutoPaymentFlag());

			list.add(map);
		}
		return list;
	}

	@Override
	public void updateSubInfoAsCanceled(int historyId) {
		subscriptionsHistoryRepository.updateSubInfoAsCanceled(historyId);
	}

}
