package com.ssafy.a302.repositoryImpl;

import java.util.List;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.a302.domain.Users;
import com.ssafy.a302.repository.custom.SubscriptionsHistoryCustom;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class SubscriptionsHistoryRepositoryImpl implements SubscriptionsHistoryCustom{
	private final JPAQueryFactory queryFactory;

	@Override
	public List<SubscriptionsHistoryCustom> findByUserInfoCustom(Users users) {
		return null;
	}
}