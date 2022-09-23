package com.ssafy.a302.repository;

import com.ssafy.a302.domain.ItemReview;
import com.ssafy.a302.dto.ItemReviewDto;
import com.ssafy.a302.repository.custom.ItemReviewCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemReviewRepository extends JpaRepository<ItemReview,Integer>, ItemReviewCustom  {
    ItemReview findByItemReviewNo(@Param("itemReviewNo") int itemReviewNo);

    List<ItemReview> findByUsers_UsersSno(@Param("usersSno")String usersSno);
}
