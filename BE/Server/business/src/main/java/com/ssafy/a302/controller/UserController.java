package com.ssafy.a302.controller;

import com.ssafy.a302.common.FileUpload;
import com.ssafy.a302.common.Utils;
import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.*;
import com.ssafy.a302.request.SignUpPetReq;
import com.ssafy.a302.request.SignUpReq;
import com.ssafy.a302.response.UsersInfoRes;
import com.ssafy.a302.service.UsersService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Api(value = "사용자 컨트롤러")
@RestController
@RequestMapping(value = "user", produces = "application/json; charset=utf8")
@RequiredArgsConstructor
public class UserController {

	private final UsersService usersService;
	private final FileUpload fileUpload;

	@ApiOperation(value = "회원가입")
	@PostMapping("/signup")
	public String signup(@RequestPart List<MultipartFile> images, @RequestPart(value = "users") SignUpReq signUpReq,
			@RequestPart(value = "pets") List<SignUpPetReq> pets) {

		try {
			String result = usersService.SignUp(signUpReq);
			for (int i = 0; i < pets.size(); i++) {
				SignUpPetReq pet = pets.get(i);
				fileUpload.petImageUpload(images, pet);
			}
		} catch (Exception e) {
			return Utils.FAIL;
		}

		return Utils.FAIL;
	}

	@ApiOperation(value = "사용자 정보 조회")
	@GetMapping("/info/{usersSno}")
	public UsersDto getInfo(@PathVariable String usersSno) {
		return usersService.userInfo(usersSno);
	}
	
	@ApiOperation(value = "마이 페이지 조회")
	@GetMapping("/mypage/{usersSno}")
	public UsersDto getMyPage(@PathVariable String usersSno) {
		return usersService.userInfo(usersSno);
	}

    @ApiOperation(value="사용자 정보 수정")
    @PatchMapping("/info")
    public String updateUserInfo(@RequestBody UsersDto userDto){
        usersService.usersUpdate(userDto);
    	
    	return Utils.SUCCESS;
    }
    
    @ApiOperation(value="사용자 탈퇴")
    @PatchMapping("/withdrow")
    public String deleteUserInfo(@RequestBody Map<String,Object> map){
    	Object usersSno = map.get("usersSno");
    	if(usersSno !=null && usersSno instanceof String) {
    		usersService.usersWithdrow((String)usersSno);
    		return Utils.SUCCESS;
    	}
    	return Utils.FAIL;
    }
    
   


}
