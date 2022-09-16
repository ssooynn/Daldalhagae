package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
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
@Table(name = "productType")
public class ProductType {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int productTypeNo;
	private String name;
	
	@OneToMany(mappedBy = "productType")
	private List<SubscribtionProductType> subscribtionProductTypes = new ArrayList<>();
	
	
}
