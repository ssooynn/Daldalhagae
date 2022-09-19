package com.ssafy.a302.service;

import java.util.List;

import org.apache.catalina.User;

import com.ssafy.a302.domain.Users;

public interface UsersService {
	public List<Users> findAll();
}
