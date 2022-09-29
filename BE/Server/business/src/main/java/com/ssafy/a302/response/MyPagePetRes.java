package com.ssafy.a302.response;

import com.ssafy.a302.domain.Pet;
import lombok.Data;

@Data
public class MyPagePetRes {
	String petSno;
	String name;
	String image;

	public MyPagePetRes(Pet pet, String imagePath) {
		this.petSno = pet.getPetSno();
		this.name = pet.getName();
		if (pet.getImage() != null && "".equals(pet.getImage()))
			this.image = imagePath + pet.getImage();
	}
}
