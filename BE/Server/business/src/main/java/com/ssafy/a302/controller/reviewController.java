package com.ssafy.a302.controller;

import com.ssafy.a302.domain.ItemReview;
import com.ssafy.a302.dto.ItemReviewDto;
import com.ssafy.a302.request.ItemReviewReq;
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
    @ApiOperation(value = "리뷰작성",notes = "리뷰를 등록합니다. ")
    @PostMapping("/")
    public ResponseEntity<?> post(@RequestPart(value = "file", required = false) MultipartFile file,
                                  @RequestBody ItemReviewReq itemReviewReq) {
        //

       return new ResponseEntity("성공",HttpStatus.OK);
    }
    @ApiOperation(value = "유저 아이템리뷰 조회",notes = "")
    @GetMapping("/itemreview/{usersSno}")
    public ResponseEntity<List<ItemReviewRes>> getByUserSno(@PathVariable("usersSno") String usersSno) {
        List<ItemReviewRes> reviewList = reviewService.findByUsersSno(usersSno);
        return new ResponseEntity(reviewList, HttpStatus.OK);
    }
    @ApiOperation(value = "유저 후기 내역 조회",notes = "")
    @GetMapping("/myreview/{usersSno}")
    public ResponseEntity<List<MyReviewRes>> getMyReviews(@PathVariable("usersSno") String usersSno) {
        List<MyReviewRes> myReviewList = reviewService.getMyReviews(usersSno);
        return new ResponseEntity(myReviewList, HttpStatus.OK);
    }


}
