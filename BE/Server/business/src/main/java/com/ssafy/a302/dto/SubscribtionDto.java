package com.ssafy.a302.dto;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscribtionDto {
	private int subscribtionNo;
	private String name;
	private String describtion;
	private int price;
	private String image;
}
