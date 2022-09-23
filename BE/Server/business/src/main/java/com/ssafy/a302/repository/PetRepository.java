package com.ssafy.a302.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ssafy.a302.domain.Pet;

public interface PetRepository extends JpaRepository<Pet, String> {

	@Query(value = "select p from Pet p where p.users.usersSno = :userId")
	List<Pet> findPetById(String userId);

	@Query(value = "select p from Pet p where p.petSno = :petId")
	Pet findPetByPetId(String petId);

}
