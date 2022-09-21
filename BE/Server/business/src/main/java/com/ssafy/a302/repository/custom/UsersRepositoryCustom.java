package com.ssafy.a302.repository.custom;

import java.util.List;

import com.ssafy.a302.domain.Users;

public interface UsersRepositoryCustom {
	Users findByUsersSno(String usersSno);
}
