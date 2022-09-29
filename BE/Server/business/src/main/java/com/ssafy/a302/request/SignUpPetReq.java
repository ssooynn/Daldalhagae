package com.ssafy.a302.request;

import java.util.Calendar;
import java.util.Date;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

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
	private LocalDate birth;
	private int fat;
	private int imageFlag;
	private String image;
	private List<Integer> materials;
	private List<Integer> effects;
	
	public Pet transforPet(Users users, Target target) {
		return new Pet(petSno, name, birth, fat, image, users, target);
	}
	
	public void birthToTargetNo() {
		Calendar beforeOne = Calendar.getInstance();
		Calendar beforeEight = Calendar.getInstance();
		beforeOne.add(Calendar.YEAR, -1);
		beforeEight.add(Calendar.YEAR, -8);
		Instant instant = birth.atStartOfDay(ZoneId.systemDefault()).toInstant();
		Date birthDate = Date.from(instant);
		
		if(birthDate.before(beforeOne.getTime())) {
			this.targetNo=1;
		}else if(birthDate.after(beforeEight.getTime())) {
			this.targetNo=2;
		}else {
			this.targetNo=3;
		}
		
	}
	
}
