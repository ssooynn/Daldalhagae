package com.ssafy.a302.request;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.Target;
import com.ssafy.a302.domain.Users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignUpPetReq {
	private String petSno;
	private String usersSno;
	private int targetNo;
	private String name;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date birth;
	private int fat;
	private int imageFlag;
	private String image;
	private List<Integer> materials;
	private List<Integer> effects;
	
	public Pet transforPet(Users users, Target target) {
		return new Pet(petSno, name, birth, fat, image, users, target);
	}
	
	
}
