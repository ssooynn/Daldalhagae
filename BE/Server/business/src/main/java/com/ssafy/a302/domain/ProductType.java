package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "PRODUCT_TYPE")
public class ProductType {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PRODUCT_TYPE_NO")
	private int productTypeNo;
	@Column(name = "NAME")
	private String name;
	
	@OneToMany(mappedBy = "productType", fetch = FetchType.LAZY)
	private List<SubscribtionProductType> subscribtionProductTypes = new ArrayList<>();
	
	
}
