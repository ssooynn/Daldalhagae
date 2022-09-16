package com.ssafy.a302.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Table(name = "userLog")
public class UserLog {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userLogNo;
	private Date userCreatedAt;
	private Date userUpdatedAt;
	private Date userDeletedAt;
	
	@ManyToOne
	@JoinColumn(name="user_sno")
	private User user;
}
