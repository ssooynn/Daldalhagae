package com.ssafy.a302.repository;

import com.ssafy.a302.domain.Snack;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SnackRepository extends JpaRepository<Snack,String> {
}
