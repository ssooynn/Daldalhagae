package com.ssafy.a302.repository.custom;

import com.ssafy.a302.domain.Users;

public interface UsersRepositoryCustom {
	Users findByUsersSno(String usersSno);
}
