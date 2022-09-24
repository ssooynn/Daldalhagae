package com.ssafy.a302.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.PetMaterial;

public interface PetMaterialRepository extends JpaRepository<PetMaterial, Integer>{
	@Modifying
	void deleteByPet(Pet pet);
}
