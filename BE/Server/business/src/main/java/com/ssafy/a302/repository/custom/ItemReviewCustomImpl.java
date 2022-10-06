package com.ssafy.a302.repository.custom;

import static com.ssafy.a302.domain.QItemReview.itemReview;

import java.util.List;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.a302.domain.ItemReview;

import lombok.RequiredArgsConstructor;



@RequiredArgsConstructor
public class ItemReviewCustomImpl implements ItemReviewCustom{
    private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<ItemReview> findByItemSno(String itemSno) {
		return jpaQueryFactory.selectFrom(itemReview)
				.where(itemReview.itemSno.eq(itemSno))
				.fetch();
	}

    

    
}
