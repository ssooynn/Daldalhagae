package com.ssafy.a302.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscribtionHistoryDto {
	private int subscribtionHistoryNo;
	private Date startDate;
	private Date endDate;
	private int autoPaymentFlag;
	private UsersDto users;
	private PetDto pet;
}
