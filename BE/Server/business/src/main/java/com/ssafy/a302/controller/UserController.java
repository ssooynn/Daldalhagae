package com.ssafy.a302.controller;

import com.ssafy.a302.dto.*;
import com.ssafy.a302.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Api(value="사용자 컨트롤러")
@RestController
@RequestMapping("user")
@RequiredArgsConstructor
public class  UserController {
    private final UserService userService;

    @ApiOperation(value="사용자 정보 조회")
    @GetMapping("/user/mypage/info/{userSno}")
    public ResponseEntity<?> getMyPageInfo(){
        UserDto userDto = new UserDto("example@naver.com", "김땡땡", "010-9999-8888", "수원시");
        return ResponseEntity.ok(userDto);
    }

    @ApiOperation(value="사용자 정보 수정")
    @PatchMapping("/mypage/info")
    public ResponseEntity<?> updateUserInfo(@RequestBody UserDto userDto){
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @ApiOperation(value="사용자의 현재 구독 내용 조회")
    @GetMapping("/user/mypage/subscriptions/now")
    public ResponseEntity<?> getUserSubNow(){
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @ApiOperation(value="사용자의 모든 구독 내용 조회")
    @GetMapping("/mypage/subscriptions")
    public ResponseEntity<?> getUserSubAll(){
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @ApiOperation(value="사용자 구독 취소")
    @PatchMapping("/mypage/subscriptions/{subSno}")
    public ResponseEntity<?> cancleUserSub(@PathVariable("subSno") String subSno){
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @ApiOperation(value="내가 쓴 리뷰 조회")
    @GetMapping("/mypage/review")
    public ResponseEntity<?> getMyReviews(){
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @ApiOperation(value="리뷰 작성하기")
    @PostMapping("/user/mypage/review")
    public ResponseEntity<?> postReview(@RequestBody ReviewDto reviewDto, @RequestPart(required = false) List<MultipartFile> images){
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @ApiOperation(value="전체 펫 상세 조회")
    @GetMapping("/mypage/pet")
    public ResponseEntity<?> getMyPetInfoAll(){
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @ApiOperation(value="펫 정보 수정")
    @PatchMapping("/mypage/pet")
    public ResponseEntity<?> updateMyPetInfo(@RequestBody PetDto petDto, @RequestPart(required = false) List<MultipartFile> images){
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @ApiOperation(value="펫 정보 추가")
    @PostMapping("/mypage/pet")
    public ResponseEntity<?> postMyPetInfo(@RequestBody PetDto petDto, @RequestPart(required = false) List<MultipartFile> images){
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @ApiOperation(value = "사용자 구매 정보 조회")
    @GetMapping("/purchase")
    public ResponseEntity<?> getUserPurchaseInfo(){
        ArrayList<SubscriptionDto> list = new ArrayList<>();
        SubscriptionDto dto = new SubscriptionDto("name", 3000, "둥둥이", "2022-10-01", "2020-10-31",  3000);
        list.add(dto);

        return ResponseEntity.ok(dto);
    }

}
