package com.ssafy.a302.dto;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserLogDto {
	private int userLogNo;
	private Date userCreatedAt;
	private Date userUpdatedAt;
	private Date userDeletedAt;
	private UsersDto users;
}
