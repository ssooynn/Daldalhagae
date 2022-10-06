package com.ssafy.a302.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ssafy.a302.domain.*;
import com.ssafy.a302.repository.*;
import com.ssafy.a302.request.SubscriptionReq;
import com.ssafy.a302.response.FeedDetailRes;
import com.ssafy.a302.response.SnackDetailRes;

import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;

import com.ssafy.a302.service.SubscriptionService;

import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class SubscriptionServiceImpl implements SubscriptionService {

	private final SubscriptionsHistoryRepository subscriptionsHistoryRepository;
	private final UsersRepository usersRepository;
	private final PetRepository petRepository;
	private final FeedRepository feedRep;
	private final SnackRepository snackRep;
	private final SubscriptionRepository subscriptionRepository;
	private final SubscriptionProductTypeRepository subscriptionProductTypeRepository;
	private final SubscriptionHistorySubscriptionRepository subscriptionHistorySubscriptionRepository;
	private final PurchaseRepository purchaseRepository;

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

			// 2. subscriptionHistoryNum
			map.put("subscriptionHistoryNo", sub.getSubscribtionHistoryNo());

			// 3. price
			map.put("price", sub.getSubscribtionHistorySubscribtion().getSubscribtion().getPrice());


			// 4. subscriptionHistoryNum
			map.put("subscriptionNo", sub.getSubscribtionHistorySubscribtion().getSubscribtion().getSubscribtionNo());

			// 5. PetSno
			map.put("petSno", sub.getPet().getPetSno());

			// 6. Items
			List<Purchase> items = new ArrayList<>();
			List<Toy> toy = new ArrayList<>();
			List<FeedDetailRes> feedDetailRes = new ArrayList<>();
			List<SnackDetailRes> snackDetailRes = new ArrayList<>();
			for (Purchase purchase : sub.getPurchases()) {
				String sno = purchase.getItemSno();
				//FEED
				if(sno.charAt(0) == 'f'){
					Feed feed = feedRep.findById(sno).get();
					feedDetailRes.add(new FeedDetailRes(feed));
				}//SNACK
				else if(sno.charAt(0) == 's'){
					Snack snack =  snackRep.findById(sno).get();
					snackDetailRes.add(new SnackDetailRes(snack));
				}//TOY
				else{
					toy.add(subscriptionsHistoryRepository.findToyInfo(sno));
				}
			}

			// 4. 그 외 정보
			map.put("feeds", feedDetailRes);
			map.put("snacks", snackDetailRes);
			map.put("toys", toy);

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

	@Override
	public void addSubInfo(SubscriptionReq subscriptionReq) {
		Users users = usersRepository.findByUsersSno(subscriptionReq.getUserSno());
		Pet pet = petRepository.findPetByPetId(subscriptionReq.getPetSno());
		Subscribtion subscription;
		// 1. 구독종류 저장
		if(subscriptionReq.getSubNo() > 6){
			System.out.println("######################" + subscriptionReq.getName());
			subscription = new Subscribtion(subscriptionReq);
			subscriptionRepository.saveAndFlush(subscription);
		}else{
			System.out.println("###################" + subscriptionReq.getSubNo());
			System.out.println( subscriptionRepository.findById(subscriptionReq.getSubNo()));
			// subscription = subscriptionRepository.findById(subscriptionReq.getSubNo());
		}

//		// 2. 구독 상품 타입 저장
//		for (int i = 0; i < 3; i++) {
//			ProductType productType = new ProductType(subscriptionReq.getTypeNums()[i]);
//			for (int j = 0; j < subscriptionReq.getTypeNums()[i]; j++) {
//				SubscribtionProductType subscriptionProductType = new SubscribtionProductType(productType, subscription);
//				subscriptionProductTypeRepository.saveAndFlush(subscriptionProductType);
//			}
//		}
//
//		// 3. 구독 내용 저장
//		SubscribtionHistory subscriptionHistory = new SubscribtionHistory(subscriptionReq, users, pet);
//		subscriptionsHistoryRepository.saveAndFlush(subscriptionHistory);
//
//		// 4. 구독 내용 구독종류 저장
//		SubscribtionHistorySubscribtion subscriptionHistorySubscription = new SubscribtionHistorySubscribtion(subscriptionHistory, subscription);
//		subscriptionHistorySubscriptionRepository.saveAndFlush(subscriptionHistorySubscription);
//
//		// 5. 구매 상품 내역 저장
//		for (String itemSno: subscriptionReq.getItemsSno()) {
//			Purchase purchase = new Purchase(subscriptionHistory, itemSno);
//			purchaseRepository.saveAndFlush(purchase);
//		}

	}
}
