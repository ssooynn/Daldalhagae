package com.ssafy.a302.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.Target;

public interface TargetRepository extends JpaRepository<Target, Integer>{
	Target findByTargetNo(int targetNo);
}
