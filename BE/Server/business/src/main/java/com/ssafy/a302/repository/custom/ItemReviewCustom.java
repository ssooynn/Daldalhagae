package com.ssafy.a302.repository.custom;

import com.ssafy.a302.domain.ItemReview;

import java.util.List;

import org.springframework.data.repository.query.Param;

public interface ItemReviewCustom  {
    List <ItemReview> findByItemSno(@Param("itemSno") String itemSno);
}
