package com.ssafy.a302.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@ApiModel("ItemReviewReq")
public class ServiceReviewReq {
    @ApiModelProperty(name = "유저번호", example = "uLItaqlcMuasbRY1kmils")
    int subscriptionNo;
    @ApiModelProperty(name = "유저번호", example = "uLItaqlcMuasbRY1kmils")
    int serviceReviewRate;
    @ApiModelProperty(name = "유저번호", example = "uLItaqlcMuasbRY1kmils")
    int serviceReviewContent;
    //이미지는 file따로받기
    @ApiModelProperty(name = "itemReviewReqList", example = "[{itemReviewReq}]")
    List<ItemReviewReq> itemReviewReqList;






}
