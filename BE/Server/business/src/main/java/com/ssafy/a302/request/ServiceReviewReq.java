package com.ssafy.a302.request;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.a302.domain.ServiceReview;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel("ServiceReviewReq")
public class ServiceReviewReq {
    @ApiModelProperty(name = "구독번호", example = "")
    int subscriptionNo;
    @ApiModelProperty(name = "서비스평점", example = "")
    int serviceReviewRate;
    @ApiModelProperty(name = "서비스리뷰내용", example = "")
    String serviceReviewContent;
    @JsonIgnore
    @ApiModelProperty(name = "서비스리뷰이미지", example = "")
    String serviceReviewImage;
    //    //이미지는 file따로받기
    @ApiModelProperty(name = "아이템리뷰리스트", example = "[{itemReviewReq}]")
    List<ItemReviewReq> itemReviewReqList;
}
