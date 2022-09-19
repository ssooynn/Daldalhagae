package com.ssafy.a302.serviceImpl;

import java.util.List;

import org.apache.catalina.User;
import org.springframework.stereotype.Service;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.repository.UsersRepository;
import com.ssafy.a302.service.UsersService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsersServiceImpl implements UsersService{
	private final UsersRepository usersRep;
	
	@Override
	public List<Users> findAll() {
		List<Users> usersList= usersRep.findAll();  
		return usersList;
	}
	
}
