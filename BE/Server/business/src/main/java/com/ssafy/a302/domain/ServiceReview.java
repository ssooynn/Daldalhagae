package com.ssafy.a302.domain;

import javax.persistence.*;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDate;
import java.util.Date;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@DynamicInsert//date 넘길때 null값 넘기지 않도록 해준다.
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
	private LocalDate regDate;

	@Builder
	public ServiceReview(int serviceReviewNo, int rate, String content, String image, Users users, SubscribtionHistory subscribtionHistory, LocalDate regDate) {
		this.serviceReviewNo = serviceReviewNo;
		this.rate = rate;
		this.content = content;
		this.image = image;
		this.users = users;
		this.subscribtionHistory = subscribtionHistory;
		this.regDate = regDate;
	}
}
