package com.ssafy.a302.response;

import java.time.LocalDate;
import java.util.Map;

import com.ssafy.a302.domain.Pet;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PetRes {
	private String petSno;
	private String userSno;
	private String name;
	private LocalDate birth;
	private int fat;
	private Map<Integer, String> materials;
	private Map<Integer, String> effects;
	private String target;
	private String image;

	public PetRes(Pet pet, Map<Integer, String> materials, Map<Integer, String> effects, String imagePath){
		this.petSno = pet.getPetSno();
		this.userSno = pet.getUsers().getUsersSno();
		this.name = pet.getName();
		this.birth = pet.getBirth();
		this.fat = pet.getFat();
		this.materials = materials;
		this.effects = effects;
		this.target = pet.getTarget().getName();
		if(pet.getImage() != null){
			this.image = imagePath + pet.getImage();
		}
	}

}
