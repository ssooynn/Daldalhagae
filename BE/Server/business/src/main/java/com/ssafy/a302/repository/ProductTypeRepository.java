package com.ssafy.a302.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.ProductType;

public interface ProductTypeRepository extends JpaRepository<ProductType, Integer>{
	
}
