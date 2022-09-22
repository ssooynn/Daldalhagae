package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name = "PURCHASE")
public class Purchase {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "PURCHASE_NO")
	private int purchaseNo;
	@Column(name = "ITEM_SNO")
	private String itemSno;
	@Column(name = "REFUND_DATE")
	private Date refundDate;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "SUBSCRIBTION_HISTORY_NO")
	private SubscribtionHistory subscribtionHistory;
	
	@OneToMany(mappedBy = "purchase", fetch = FetchType.LAZY)
	private List<ItemReview> itemReviews = new ArrayList<>();
}
