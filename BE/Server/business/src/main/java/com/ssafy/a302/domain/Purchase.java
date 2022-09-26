package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.ssafy.a302.response.PurchaseRes;
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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PURCHASE_NO")
	private int purchaseNo;
	@Column(name = "ITEM_SNO")
	private String itemSno;
	@Column(name = "REFUND_DATE")
	private Date refundDate;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "SUBSCRIBTION_HISTORY_NO")
	private SubscribtionHistory subscribtionHistory;
	
	@OneToOne(mappedBy = "purchase", fetch = FetchType.LAZY)
	private ItemReview itemReview;

	public Purchase(SubscribtionHistory subscriptionHistory, String itemSno) {
		this.itemSno = itemSno;
		this.subscribtionHistory = subscriptionHistory;
	}

	public PurchaseRes toPurchaseRes(){
		PurchaseRes purchaseRes=new PurchaseRes();
		purchaseRes.setPurchaseNo(this.purchaseNo);
		purchaseRes.setItemSno(this.itemSno);
		purchaseRes.setRefundDate(this.refundDate);
		return purchaseRes;
	}

}
