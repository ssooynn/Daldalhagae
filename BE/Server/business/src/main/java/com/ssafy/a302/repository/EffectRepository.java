package com.ssafy.a302.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.Effect;

public interface EffectRepository extends JpaRepository<Effect, Integer>{
	Effect findByEffectNo(int effectNo);
}
