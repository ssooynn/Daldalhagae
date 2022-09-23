package com.ssafy.a302.request;

import java.util.List;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignUpPetReq {
	String userSno;
	String targetNo;
	String name;
	String birth;
	String fat;
	List<Integer> materials;
	List<Integer> effects;
}
