package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SnackTargetDto {
	private int snackTargetNo;
	private SnackDto snack;
	private TargetDto target;
}
