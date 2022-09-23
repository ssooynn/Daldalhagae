package com.ssafy.a302.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Table(name = "USERS")
public class Users {
	@Id
	@Column(name="USERS_SNO")
	private String usersSno;
	
	@Column(name="KAKAO_ID")
	private String kakaoId;
	
	@Column(name="EMAIL")
	private String email;
	
	@Column(name="NAME")
	private String name;
	
	@Column(name="PHONE")
	private String phone;
	
	@Column(name="ADDRESS")
	private String address;
	
	
}

