package com.ssafy.a302.serviceImpl;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.ssafy.a302.domain.Payment;
import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.ProductType;
import com.ssafy.a302.domain.Purchase;
import com.ssafy.a302.domain.Subscribtion;
import com.ssafy.a302.domain.SubscribtionHistory;
import com.ssafy.a302.domain.SubscribtionHistorySubscribtion;
import com.ssafy.a302.domain.SubscribtionProductType;
import com.ssafy.a302.domain.Users;
import com.ssafy.a302.repository.PaymentRepository;
import com.ssafy.a302.repository.PetRepository;
import com.ssafy.a302.repository.ProductTypeRepository;
import com.ssafy.a302.repository.PurchaseRepository;
import com.ssafy.a302.repository.SubscribtionHistoryRepository;
import com.ssafy.a302.repository.SubscribtionRepository;
import com.ssafy.a302.repository.SubscriptionHistorySubscriptionRepository;
import com.ssafy.a302.repository.SubscriptionProductTypeRepository;
import com.ssafy.a302.repository.UsersRepository;
import com.ssafy.a302.request.PaymentReq;
import com.ssafy.a302.request.PaymentSubHistoryReq;
import com.ssafy.a302.response.PaymentRes;
import com.ssafy.a302.service.PaymentService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
	private final UsersRepository usersRep;
	private final PetRepository petRep;
	private final SubscribtionHistoryRepository subHistoryRep;
	private final SubscribtionRepository subRep;
	private final SubscriptionHistorySubscriptionRepository subHistorySubRep;
	private final SubscriptionProductTypeRepository subProductTpyeRep;
	private final ProductTypeRepository productTypeRep;
	private final PurchaseRepository purchaseRep;
	private final PaymentRepository paymentRep;

	@Override
	@Transactional
	public void addPayment(PaymentReq paymentReq) {
		log.info("---------------유저 찾기");
		Users users = usersRep.findByUsersSno(paymentReq.getUsersSno());

		if (!paymentReq.isPaymentFlag()) {
			log.info("----------------첫결재");

			for (PaymentSubHistoryReq psreq : paymentReq.getSubscriptionHistorys()) {
				log.info("---------------- 펫 찾기");
				Pet pet = petRep.findByPetSno(psreq.getPetSno());

				log.info("----------------- 구독 내역 생성");
				SubscribtionHistory subHistory = psreq.createSubHistory(users, pet);
				subHistoryRep.saveAndFlush(subHistory);

				log.info("------------------ 구독 종류 가져오기");
				Subscribtion subscribtion;
				int subscriptionNo = psreq.getSubscription().getSubscriptionNo();
				if (0<subscriptionNo && subscriptionNo < 7) {
					log.info("---------------- 구독 종류 가져오기");
					subscribtion = subRep.findById(subscriptionNo).get();
				} else {
					log.info("---------------- 구독 종류 만들기");
					subscribtion = psreq.getSubscription().createSub();
					subRep.saveAndFlush(subscribtion);

					log.info("---------------- 구독_상품_타입 추가(사료)");
					if (psreq.getFeeds() != null && psreq.getFeeds().size() != 0) {
						for (int i = 0; i < psreq.getFeeds().size(); i++) {
							ProductType productType = productTypeRep.findById(1).get();
							SubscribtionProductType subProductType = new SubscribtionProductType(productType,
									subscribtion);
							subProductTpyeRep.saveAndFlush(subProductType);
						}
					}

					log.info("---------------- 구독_상품_타입 추가(간식)");
					if (psreq.getSnacks() != null && psreq.getSnacks().size() != 0) {
						for (int i = 0; i < psreq.getSnacks().size(); i++) {
							ProductType productType = productTypeRep.findById(2).get();
							SubscribtionProductType subProductType = new SubscribtionProductType(productType,
									subscribtion);
							subProductTpyeRep.saveAndFlush(subProductType);
						}
					}

					log.info("---------------- 구독_상품_타입 추가(장난감)");
					if (psreq.getToys() != null && psreq.getToys().size() != 0) {
						for (int i = 0; i < psreq.getToys().size(); i++) {
							ProductType productType = productTypeRep.findById(3).get();
							SubscribtionProductType subProductType = new SubscribtionProductType(productType,
									subscribtion);
							subProductTpyeRep.saveAndFlush(subProductType);
						}
					}
				}

				log.info("---------------- 구독 내역 구독 종류 중계 테이블 생성");
				SubscribtionHistorySubscribtion subHistorySub = new SubscribtionHistorySubscribtion(subHistory,
						subscribtion);
				subHistorySubRep.saveAndFlush(subHistorySub);

				log.info("---------------- 구매 상품 내역 생성");
				if (psreq.getFeeds() != null && psreq.getFeeds().size() != 0) {
					for (String feedSno : psreq.getFeeds()) {
						Purchase purchase = new Purchase(subHistory, feedSno);
						purchaseRep.saveAndFlush(purchase);
					}
				}
				if (psreq.getSnacks() != null && psreq.getSnacks().size() != 0) {
					for (String snackSno : psreq.getSnacks()) {
						Purchase purchase = new Purchase(subHistory, snackSno);
						purchaseRep.saveAndFlush(purchase);
					}
				}
				if (psreq.getToys() != null && psreq.getToys().size() != 0) {
					for (String toySno : psreq.getToys()) {
						Purchase purchase = new Purchase(subHistory, toySno);
						purchaseRep.saveAndFlush(purchase);
					}
				}

			}
		} else {
			for (PaymentSubHistoryReq psreq : paymentReq.getSubscriptionHistorys()) {
				log.info("---------------- 펫 찾기");
				log.info("---------------- 펫 찾기");
				Pet pet = petRep.findByPetSno(psreq.getPetSno());

				log.info("---------------- 구독 내역 찾기");
				SubscribtionHistory subHistory = subHistoryRep.findOneByPet(pet);

				log.info("---------------- 구매 상품 내역 생성");
				if (psreq.getFeeds() != null && psreq.getFeeds().size() != 0) {
					for (String feedSno : psreq.getFeeds()) {
						Purchase purchase = new Purchase(subHistory, feedSno);
						purchaseRep.saveAndFlush(purchase);
					}
				}
				if (psreq.getSnacks() != null && psreq.getSnacks().size() != 0) {
					for (String snackSno : psreq.getSnacks()) {
						Purchase purchase = new Purchase(subHistory, snackSno);
						purchaseRep.saveAndFlush(purchase);
					}
				}
				if (psreq.getToys() != null && psreq.getToys().size() != 0) {
					for (String toySno : psreq.getToys()) {
						Purchase purchase = new Purchase(subHistory, toySno);
						purchaseRep.saveAndFlush(purchase);
					}
				}

			}

		}

	}

	@Override
	public PaymentRes getPaymetnNo(String usersSno) {
		Payment payment = new Payment();
		paymentRep.save(payment);
		Users users= usersRep.findByUsersSno(usersSno);
		
		return new PaymentRes(users, payment.getPaymentNo());
	}

}
