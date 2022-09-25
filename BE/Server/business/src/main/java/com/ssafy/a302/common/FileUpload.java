package com.ssafy.a302.common;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.a302.request.SignUpPetReq;

@Repository
public class FileUpload {

	/* 펫들 이미지 추가 */
	public boolean petsImageUpload(List<MultipartFile> images, SignUpPetReq pet)
			throws IllegalStateException, IOException {
		File folder = new File(Utils.IMAGE_PATH);

		if (!folder.exists()) {
			folder.mkdir();
		}

		for (MultipartFile image : images) {
			if (image.getOriginalFilename().equals(pet.getImage())) {
				String getImageName = image.getOriginalFilename();
				String uniqueName = getUniqueFileName(getImageName);
				image.transferTo(new File(Utils.IMAGE_PATH + "/" + uniqueName));
				pet.setImage(uniqueName);
				return true;
			}
		}

		return false;

	}

	/* 펫 이미지 추가 */
	public boolean petImageUpload(MultipartFile image, SignUpPetReq pet) throws IllegalStateException, IOException {
		File folder = new File(Utils.IMAGE_PATH);

		if (!folder.exists()) {
			folder.mkdir();
		}

		if (image.getOriginalFilename().equals(pet.getImage())) {
			String getImageName = image.getOriginalFilename();
			String uniqueName = getUniqueFileName(getImageName);
			image.transferTo(new File(Utils.IMAGE_PATH + "/" + uniqueName));
			pet.setImage(uniqueName);
			return true;
		}

		return false;

	}
	
	/* 펫 이미지 수정 */
	public boolean petImageUpdate(String preImage, MultipartFile image, SignUpPetReq pet)
			throws IllegalStateException, IOException {
		File preFile = new File(Utils.IMAGE_PATH + "/" + preImage);
		if (preFile.exists())
			preFile.delete();
		if(image ==null)
			return true;
		petImageUpload(image, pet);

		return false;

	}

	public String getUniqueFileName(String fileName) {
		// 업로드한 파일명이 중복될 경우 파일 이름 변경하기 - 현재시간 (밀리초까지 )추가
		// ab.text => ab_20210630155820123.txt

		// 순수파일명만 구하기
		int idx = fileName.lastIndexOf(".");
		String fName = fileName.substring(0, idx); // ab

		// 확장자 구하기
		String ext = fileName.substring(idx); // .txt

		String result = fName + "_" + getTimeStamp() + ext;
		return result;

	}

	public String getTimeStamp() {
		Date d = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
		String str = sdf.format(d);
		return str;
	}
}