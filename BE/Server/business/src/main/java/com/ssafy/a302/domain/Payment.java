package com.ssafy.a302.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name="PAYMENT")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="PAYMENT_NO")
	private int paymentNo;
}
