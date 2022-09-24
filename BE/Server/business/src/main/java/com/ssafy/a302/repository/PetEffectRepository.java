package com.ssafy.a302.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.PetEffect;

public interface PetEffectRepository extends JpaRepository<PetEffect, Integer> {
	@Modifying
	void deleteByPet(Pet pet);
}
