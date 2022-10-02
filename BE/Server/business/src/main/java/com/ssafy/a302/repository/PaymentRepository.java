package com.ssafy.a302.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer>{

}
