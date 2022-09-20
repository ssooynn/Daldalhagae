package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SnackMaterialDto {
	private int SnackMaterialNo;
	private SnackDto snack;
	private MaterialDto material;
}
