package com.ssafy.a302.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeedTargetDto {
	private int feedTargetNo;
	private FeedDto feed;
	private TargetDto target;

}
