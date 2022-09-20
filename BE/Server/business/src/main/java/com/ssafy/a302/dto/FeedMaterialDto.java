package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeedMaterialDto {
	private int feedMaterialNo;
	private FeedDto feed;
	private MaterialDto material;
}
