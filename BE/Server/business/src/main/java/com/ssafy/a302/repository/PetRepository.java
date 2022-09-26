package com.ssafy.a302.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.Users;

public interface PetRepository extends JpaRepository<Pet, String> {

	@Query(value = "select p from Pet p where p.users.usersSno = :userId")
	List<Pet> findPetById(@Param("userId")String userId);

	@Query(value = "select p from Pet p where p.petSno = :petId")
	Pet findPetByPetId(String petId);
	
	List<Pet> findByUsers(Users users);
	List<Pet> findByUsers_UsersSno(@Param("usersSno")String usersSno);
	boolean existsByPetSno(String petSno);
	
	Pet findByPetSno(String petSno);

}
