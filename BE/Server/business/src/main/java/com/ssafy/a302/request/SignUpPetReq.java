package com.ssafy.a302.request;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignUpPetReq {
	int targetNo;
	String name;
	String birth;
	int fat;
	String image;
	List<Integer> materials;
	List<Integer> effects;
}
