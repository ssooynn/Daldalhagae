package com.ssafy.a302.controller;

import com.ssafy.a302.domain.ItemReview;
import com.ssafy.a302.dto.ItemReviewDto;
import com.ssafy.a302.request.ItemReviewReq;
import com.ssafy.a302.request.ServiceReviewReq;
import com.ssafy.a302.request.SignUpReq;
import com.ssafy.a302.response.ItemReviewRes;
import com.ssafy.a302.response.MyReviewRes;
import com.ssafy.a302.service.ReviewService;
import com.ssafy.a302.service.UsersService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

@Api(value = "리뷰 컨트롤러")
@RestController
@RequestMapping(value = "review", produces = "application/json; charset=utf8")
@RequiredArgsConstructor
public class reviewController {
    @Autowired
    UsersService usersService;
    @Autowired
    ReviewService reviewService;

    /*리뷰 등록 API*/
    @ApiOperation(value = "리뷰작성",notes = "리뷰를 등록합니다. ")
    @PostMapping("/")
    public ResponseEntity<?> post(@RequestPart(name = "이미지파일배열",required = false) List<MultipartFile> files,
                                  @RequestBody ServiceReviewReq serviceReviewReq) {
       return new ResponseEntity("성공",HttpStatus.OK);
    }

    /*리뷰 조회 API */
    @ApiOperation(value = "유저 별 아이템리뷰 조회",notes = "유저 번호로 해당 유저의 상품 리뷰 전체 조회합니다.")
    @GetMapping("/user/{usersSno}")
    public ResponseEntity<List<ItemReviewRes>> getByUserSno(@PathVariable("usersSno") String usersSno) {
        List<ItemReviewRes> reviewList = reviewService.findByUsersSno(usersSno);
        return new ResponseEntity(reviewList, HttpStatus.OK);
    }
    //todo: 페이징 사용하기.
    @ApiOperation(value = "상품 별 리뷰 조회",notes = "상품번호로 해당 상품의 리뷰 전체를 조회합니다.")
    @GetMapping("/item/{itemSno}")
    public ResponseEntity<List<ItemReviewRes>> getByItemSno(@PathVariable("itemSno") String itemSno) {
        List<ItemReviewRes> reviewList = reviewService.findByItemSno(itemSno);
        return new ResponseEntity(reviewList, HttpStatus.OK);
    }
    @ApiOperation(value = "유저 후기 내역 조회",notes = "유저가 그동안 작성한 후기를 구독 별로 반환합니다.")
    @GetMapping("/myreview/{usersSno}")
    public ResponseEntity<List<MyReviewRes>> getMyReviews(@PathVariable("usersSno") String usersSno) {
        List<MyReviewRes> myReviewList = reviewService.getMyReviews(usersSno);
        return new ResponseEntity(myReviewList, HttpStatus.OK);
    }


}