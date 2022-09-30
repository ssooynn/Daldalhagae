package com.ssafy.a302.response;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.ssafy.a302.domain.Pet;
import com.ssafy.a302.domain.Users;

import lombok.Data;

@Data
public class MyPageRes {
	String name;
	int subscriptionCnt;
	int unReviewCnt;
	List<MyPagePetRes> pets;
	
	public MyPageRes(Users users,String imagePath, int subscriptionCnt, int unReviewCnt) {
		this.name =users.getName();
		pets = new ArrayList<MyPagePetRes>();
		Iterator<Pet> iter = users.getPets().iterator();
		while(iter.hasNext()) {
			pets.add(new MyPagePetRes(iter.next(),imagePath));
		}
		this.subscriptionCnt =subscriptionCnt;
		this.unReviewCnt =unReviewCnt;
	}
}
