package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ToyDto {
	private String toySno;
	private String name;
	private String image;
	private String material;
	private String effect;
}
