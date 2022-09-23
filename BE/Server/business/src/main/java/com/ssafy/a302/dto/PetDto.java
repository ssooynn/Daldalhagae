package com.ssafy.a302.dto;

import com.ssafy.a302.domain.Pet;

import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class PetDto {
	private String petSno;
	private String userSno;
	private String name;
	private String birth;
	private int fat;
	private String materials;
	private String effects;
	private String target;
	private String image;
}
