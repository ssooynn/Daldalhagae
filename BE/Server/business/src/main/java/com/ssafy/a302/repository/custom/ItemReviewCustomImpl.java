package com.ssafy.a302.repository.custom;

import static com.ssafy.a302.domain.QItemReview.itemReview;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.a302.domain.ItemReview;
import com.ssafy.a302.dto.ItemReviewDto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ItemReviewCustomImpl implements ItemReviewCustom{
    private final JPAQueryFactory jpaQueryFactory;


    public ItemReviewCustomImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }
    //리뷰 시리얼넘버 분기.
    //1. 먼저 FindByUser_UsersSno를 돌리고나서, 쿼리 실행.
    //1. 서브쿼리 사용 (먼저 userNo로 조회 이후 나머지 테이블 조인)

//    @Override
//    public List<ItemReview> findByUsersSno(String usersSno) {
//
//        return null;
//    }
}
