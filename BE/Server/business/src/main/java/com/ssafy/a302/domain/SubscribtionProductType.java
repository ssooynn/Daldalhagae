package com.ssafy.a302.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Table(name = "SUBSCRIBTION_PRODUCT_TYPE")
public class SubscribtionProductType {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "SUBSCRIBTION_PRODUCT_TYPE_NO")
	private int subscribtionProductTypeNo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="PRODUCT_TYPE_NO")
	private ProductType productType;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="SUBSCRIBTION_NO")
	private Subscribtion subscribtion;

    public SubscribtionProductType(ProductType productType, Subscribtion subscribtion) {
		this.productType = productType;
		this.subscribtion = subscribtion;
    }

}
