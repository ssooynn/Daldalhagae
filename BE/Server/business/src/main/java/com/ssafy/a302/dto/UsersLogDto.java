package com.ssafy.a302.dto;

import java.util.Date;

import com.ssafy.a302.domain.UsersLog;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsersLogDto {
	private int userLogNo;
	private Date userCreatedAt;
	private Date userUpdatedAt;
	private Date userDeletedAt;
	private String usersSno;
	
	public UsersLogDto(Date userCreatedAt, String usersSno) {
		super();
		this.userCreatedAt = userCreatedAt;
		this.usersSno = usersSno;
	}
	
	
}
