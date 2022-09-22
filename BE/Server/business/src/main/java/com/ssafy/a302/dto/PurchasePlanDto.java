package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PurchasePlanDto {
	private int purchasePlanNo;
	private String itemSno;
	private PetDto pet;
	private UsersDto users;
}
