package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.ssafy.a302.request.SubscriptionReq;
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

    @Builder
	public SubscribtionHistory(SubscriptionReq subscriptionReq, Users user, Pet pet) {
		this.startDate = subscriptionReq.getStartDate();
		this.endDate = subscriptionReq.getEndDate();
		this.autoPaymentFlag = subscriptionReq.getAutoPaymentFlag();
		this.users = user;
		this.pet = pet;
    }
}
