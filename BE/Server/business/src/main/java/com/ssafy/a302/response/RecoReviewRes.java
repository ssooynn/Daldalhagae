package com.ssafy.a302.response;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

public interface RecoReviewRes {
	int getItemReviewNo();
	String getUsersSno();
	String getPetSno();
	String getItemSno();
	int getRate();
	String getContent();
	String getImage();
	@JsonFormat(pattern = "yyyy-MM-dd")
	LocalDate getDate();
	String getUsersName();
	String getPetName();
}
