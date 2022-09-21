package com.ssafy.a302.repositoryImpl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.a302.domain.Users;
import com.ssafy.a302.repository.custom.UsersRepositoryCustom;
import static com.ssafy.a302.domain.QUsers.users;
import static com.ssafy.a302.domain.QPet.pet;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UsersRepositoryImpl implements UsersRepositoryCustom{

	private final JPAQueryFactory queryFactory;
	
	@Override
	public Users findByUsersSno(String usersSno) {
		return queryFactory.selectFrom(users)
				.join(pet)
				.on(users.usersSno.eq(pet.users.usersSno))
				.where(users.usersSno.eq(usersSno))
				.fetchOne();
	}
	
}
