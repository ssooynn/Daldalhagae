package com.ssafy.a302.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.File;

@Data
@NoArgsConstructor
@ApiModel("ItemReviewReq")
public class ItemReviewReq {
//    @ApiModelProperty(name = "유저번호", example = "uLItaqlcMuasbRY1kmils")
//    String userSno;
    @ApiModelProperty(name = "구매번호", example = "1")
    int purchaseNo;
//    @ApiModelProperty(name = "반려견번호", example = "pw6v5ia7OzWutQZPvpmFQ")
//    String petSno;
    @ApiModelProperty(name = "아이템번호", example = "fZ529EWuqunmK7byYWfM5")
    String itemSno;
    @ApiModelProperty(name = "평점", example = "4")
    int rate;
    @ApiModelProperty(name = "리뷰내용", example = "애들이 잘 먹어요!")
    String content;
//    @ApiModelProperty(name = "이미지파일")
//    File file;
//    @ApiModelProperty(name = "이미지url", example = "")
//    String image; //파일로받고 저장후에 name on;
}
