package com.ssafy.a302.repository;

import com.ssafy.a302.domain.ItemReview;
import com.ssafy.a302.dto.ItemReviewDto;
import com.ssafy.a302.repository.custom.ItemReviewCustom;
import com.ssafy.a302.response.RecoReviewRes;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemReviewRepository extends JpaRepository<ItemReview,Integer>{
    ItemReview findByItemReviewNo(@Param("itemReviewNo") int itemReviewNo);
    @Query(value="select "
    		+ "i.ITEM_REVIEW_NO as itemReviewNo, i.USERS_SNO as usersSno, i.PET_SNO as petSno, "
    		+ "i.ITEM_SNO as itemSno, i.RATE as rate, i.CONTENT as content, i.IMAGE as image, "
    		+ "i.CREATED_AT as date, u.NAME as usersName, p.NAME as petName from "
    		+ "(select * from ITEM_REVIEW  where ITEM_SNO = :itemSno limit 2) i "
    		+ "join USERS u on u.USERS_SNO = i.USERS_SNO "
    		+ "join PET p on p.PET_SNO = i.PET_SNO" 
    		, nativeQuery = true)
    List<RecoReviewRes> findTop2ByItemSno(@Param("itemSno")String itemSno);
    List<ItemReview> findByUsers_UsersSno(@Param("usersSno")String usersSno);
    Page<ItemReview> findPageByItemSno(@Param("itemSno")String itemSno, Pageable pageable);
    int countByItemSno(@Param("itemSno")String itemSno);
}
