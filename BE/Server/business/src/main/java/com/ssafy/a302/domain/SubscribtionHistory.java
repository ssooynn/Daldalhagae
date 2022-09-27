package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.ssafy.a302.response.PurchaseRes;
import com.ssafy.a302.response.UnratedSubscriptionRes;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "SUBSCRIBTION_HISTORY")
public class SubscribtionHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="SUBSCRIBTION_HISTORY_NO")
	private int subscribtionHistoryNo;
	@Column(name="START_DATE")
	private Date startDate;
	@Column(name="END_DATE")
	private Date endDate;
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
	public SubscribtionHistory(int subscribtionHistoryNo, Date startDate, Date endDate, int autoPaymentFlag, Users users, Pet pet, List<Purchase> purchases, ServiceReview serviceReview, SubscribtionHistorySubscribtion subscribtionHistorySubscribtion) {
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

}
