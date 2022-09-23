package com.ssafy.a302.request;

import java.util.Date;
import java.util.List;

import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.Users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PetReq {
	private String petSno;
	private String userSno;
	private String name;
	private Date birth;
	private int fat;
	private List<String> materials;
	private List<String> effects;
	private String target;
	private String image;

}
