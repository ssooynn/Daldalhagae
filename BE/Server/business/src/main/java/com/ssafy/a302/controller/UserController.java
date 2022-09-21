package com.ssafy.a302.controller;

import com.ssafy.a302.dto.*;
import com.ssafy.a302.request.SignUpReq;
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

@Api(value = "사용자 컨트롤러")
@RestController
@RequestMapping(value = "user", produces = "application/json; charset=utf8")
@RequiredArgsConstructor
public class UserController {

	private final UsersService usersService;

	@ApiOperation(value = "회원가입")
	@PostMapping("/signup")
	public String signup(@RequestBody SignUpReq signUpReq) {
		boolean result = false;
		
		try {
			result = usersService.SignUp(signUpReq);

		} catch (Exception e) {
			return "회원 가입 실패";
		}
		
		if (result)
			return "회원 가입 성공";
		
		return "회원 가입 실패";
	}

    @ApiOperation(value="사용자 정보 조회")
    @GetMapping("/info/{usersSno}")
    public void getMyPageInfo(@PathVariable String usersSno){
    	usersService.userInfo(usersSno);
    }

//    @ApiOperation(value="사용자 정보 수정")
//    @PatchMapping("/mypage/info")
//    public ResponseEntity<?> updateUserInfo(@RequestBody UsersDto userDto){
//        return ResponseEntity.status(HttpStatus.OK).build();
//    }
//
//    @ApiOperation(value="사용자의 현재 구독 내용 조회")
//    @GetMapping("/mypage/subscriptions/now/{subSno}")
//    public ResponseEntity<?> getUserSubNow(@PathVariable("subSno") String subSno){
//        SubscriptionDto subscriptionDto = new SubscriptionDto("뭉자뭉자", 20000, "뭉자", "2022-10-10", "2022-11-09", 1 );
//        return ResponseEntity.ok(subscriptionDto);
//    }
//
//    @ApiOperation(value="사용자의 모든 구독 내용 조회")
//    @GetMapping("/mypage/subscriptions")
//    public ResponseEntity<?> getUserSubAll(){
//        List<SubscriptionDto> list = new ArrayList<>();
//        SubscriptionDto subscriptionDto1 = new SubscriptionDto("뭉자뭉자", 20000, "뭉자", "2022-10-10", "2022-11-09", 1 );
//        SubscriptionDto subscriptionDto2 = new SubscriptionDto("부자몽자", 100000, "몽자", "2022-10-10", "2022-11-09", 1 );
//
//        return ResponseEntity.ok(list);
//    }
//
//    @ApiOperation(value="사용자 구독 취소")
//    @PatchMapping("/mypage/subscriptions/{subSno}")
//    public ResponseEntity<?> cancleUserSub(@PathVariable("subSno") String subSno){
//        return ResponseEntity.status(HttpStatus.OK).build();
//    }
//
//    @ApiOperation(value="내가 쓴 리뷰 조회")
//    @GetMapping("/mypage/review")
//    public ResponseEntity<?> getMyReviews(){
//        List<ReviewDto> list = new ArrayList<>();
//        ReviewDto reviewDto1 = new ReviewDto("U1991991991", "P1001001001", "I2002002002", "1", "시러요", null);
//        ReviewDto reviewDto2= new ReviewDto("U1991991992", "P1001001002", "I2002002002", "5", "조아요", null);
//
//        list.add(reviewDto1);
//        list.add(reviewDto2);
//
//        return ResponseEntity.ok(list);
//    }
//
//    @ApiOperation(value="리뷰 작성하기")
//    @PostMapping("/mypage/review")
//    public ResponseEntity<?> postReview(@RequestBody ReviewDto reviewDto, @RequestPart(required = false) List<MultipartFile> images){
//        return ResponseEntity.status(HttpStatus.OK).build();
//    }
//
//    @ApiOperation(value="전체 펫 상세 조회")
//    @GetMapping("/mypage/pet")
//    public ResponseEntity<?> getMyPetInfoAll(){
//
//
//        List<PetDto.Detail> list = new ArrayList<>();
//        PetDto.Detail petDto1 = new PetDto.Detail("U1231231233", "댕댕이", "2021-09-18", "3", "어쩌구", "저쩌구", "유아견", null);
//        PetDto.Detail petDto2 = new PetDto.Detail("U1231231233", "댕댕이2", "2021-09=10-18", "2", "어쩌구", "저쩌구", "유아견", null);
//
//        list.add(petDto1);
//        list.add(petDto2);
//        return ResponseEntity.ok(list);
//    }
//
//    @ApiOperation(value="펫 정보 수정")
//    @PatchMapping("/mypage/pet")
//    public ResponseEntity<?> updateMyPetInfo(@RequestBody PetDto petDto, @RequestPart(required = false) List<MultipartFile> images){
//        return ResponseEntity.status(HttpStatus.OK).build();
//    }
//
//    @ApiOperation(value="펫 정보 추가")
//    @PostMapping("/mypage/pet")
//    public ResponseEntity<?> postMyPetInfo(@RequestBody PetDto petDto, @RequestPart(required = false) List<MultipartFile> images){
//        return ResponseEntity.status(HttpStatus.OK).build();
//    }
//
//    @ApiOperation(value = "사용자 구매 정보 조회")
//    @GetMapping("/purchase")
//    public ResponseEntity<?> getUserPurchaseInfo(){
//        ArrayList<SubscriptionDto> list = new ArrayList<>();
//        SubscriptionDto dto = new SubscriptionDto("name", 3000, "둥둥이", "2022-10-01", "2020-10-31",  3000);
//        list.add(dto);
//
//        return ResponseEntity.ok(dto);
//    }

}
