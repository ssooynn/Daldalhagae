package com.ssafy.a302.domain;

import javax.persistence.*;

import lombok.*;

import java.util.Date;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "SERVICE_REVIEW")
public class ServiceReview {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SERVICE_REVIEW_NO")
	private int serviceReviewNo;
	@Column(name = "RATE")
	private int rate;
	@Column(name = "CONTENT")
	private String content;
	@Column(name = "IMAGE")
	private String image;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "USERS_SNO")
	private Users users;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "SUBSCRIBTION_HISTORY_NO")
	private SubscribtionHistory subscribtionHistory;

	@Column(name="REG_DATE")
	private Date regDate;

	@Builder
	public ServiceReview(int serviceReviewNo, int rate, String content, String image, Users users, SubscribtionHistory subscribtionHistory) {
		this.serviceReviewNo = serviceReviewNo;
		this.rate = rate;
		this.content = content;
		this.image = image;
		this.users = users;
		this.subscribtionHistory = subscribtionHistory;
	}
}
