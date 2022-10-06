package com.ssafy.a302.repository.custom;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.response.UsersInfoRes;

public interface UsersRepositoryCustom {
	Users findByUsersSno(String usersSno);
	Users findAndPetsByUsersSno(String usersSno);
}
