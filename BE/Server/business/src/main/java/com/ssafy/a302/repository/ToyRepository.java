package com.ssafy.a302.repository;

import com.ssafy.a302.domain.Toy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToyRepository extends JpaRepository<Toy,String> {
}
