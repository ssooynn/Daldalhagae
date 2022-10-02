package com.ssafy.a302.domain;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.ssafy.a302.request.SubscriptionReq;
import com.ssafy.a302.response.PurchaseRes;
import com.ssafy.a302.response.UnratedSubscriptionRes;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "SUBSCRIBTION_HISTORY")
public class SubscribtionHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="SUBSCRIBTION_HISTORY_NO")
	private int subscribtionHistoryNo;
	@Column(name="START_DATE")
	private LocalDate startDate;
	@Column(name="END_DATE")
	private LocalDate endDate;
	@Column(name="AUTO_PAYMENT_FLAG")
	private int autoPaymentFlag;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "USERS_SNO")
	private Users users;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "PET_SNO")
	private Pet pet;
	
	@OneToMany(mappedBy = "subscribtionHistory", fetch = FetchType.LAZY)
	private List<Purchase> purchases = new ArrayList<>();
	
	@OneToOne(mappedBy = "subscribtionHistory", fetch = FetchType.LAZY)
	private ServiceReview serviceReview;

	@OneToOne(mappedBy = "subscribtionHistory", fetch = FetchType.LAZY)
	private SubscribtionHistorySubscribtion subscribtionHistorySubscribtion;
	@Builder
	public SubscribtionHistory(int subscribtionHistoryNo, LocalDate startDate, LocalDate endDate, int autoPaymentFlag, Users users, Pet pet, List<Purchase> purchases, ServiceReview serviceReview, SubscribtionHistorySubscribtion subscribtionHistorySubscribtion) {
		this.subscribtionHistoryNo = subscribtionHistoryNo;
		this.startDate = startDate;
		this.endDate = endDate;
		this.autoPaymentFlag = autoPaymentFlag;
		this.users = users;
		this.pet = pet;
		this.purchases = purchases;
		this.serviceReview = serviceReview;
		this.subscribtionHistorySubscribtion = subscribtionHistorySubscribtion;
	}
	
	public SubscribtionHistory(Users users, Pet pet) {
		this.users = users;
		this.pet = pet;
		this.startDate = LocalDate.now();
		this.endDate = LocalDate.now().plusMonths(1);
		this.autoPaymentFlag = 1;
	}
	
	public UnratedSubscriptionRes toUnratedSubscriptionRes(List<PurchaseRes> purchaseResList){
		UnratedSubscriptionRes unratedSubscriptionRes = new UnratedSubscriptionRes();
		unratedSubscriptionRes.setSubscriptionNo(this.subscribtionHistoryNo);
		unratedSubscriptionRes.setSubscriptionName(this.subscribtionHistorySubscribtion.getSubscribtion().getName());
		unratedSubscriptionRes.setSubscriptionStartDate(this.startDate);
		unratedSubscriptionRes.setSubscriptionEndDate(this.endDate);
		unratedSubscriptionRes.setPetSno(this.pet.getPetSno());
		unratedSubscriptionRes.setPetName(this.pet.getName());
		unratedSubscriptionRes.setPurchaseResList(purchaseResList);

		return unratedSubscriptionRes;

	}

    @Builder
	public SubscribtionHistory(SubscriptionReq subscriptionReq, Users user, Pet pet) {
		this.startDate = subscriptionReq.getStartDate();
		this.endDate = subscriptionReq.getEndDate();
		this.autoPaymentFlag = subscriptionReq.getAutoPaymentFlag();
		this.users = user;
		this.pet = pet;
    }
}
