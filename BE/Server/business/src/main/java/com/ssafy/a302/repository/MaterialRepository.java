package com.ssafy.a302.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.Material;

public interface MaterialRepository extends JpaRepository<Material, Integer>{
	Material findByMaterialNo(int materialNo);
}
