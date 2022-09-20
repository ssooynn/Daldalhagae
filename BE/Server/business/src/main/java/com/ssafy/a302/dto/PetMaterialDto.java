package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PetMaterialDto {
	private int petMaterialNo;
	private PetDto pet;
	private MaterialDto material;
}
