package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Table(name = "purchase")
public class Purchase {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int purchaseNo;
	private String itemSno;
	private Date refundDate;
	
	@ManyToOne
	@JoinColumn(name = "subscribtion_history_no")
	private SubscribtionHistory subscribtionHistory;
	
	@OneToMany(mappedBy = "purchase")
	private List<ItemReview> itemReviews = new ArrayList<>();
}
