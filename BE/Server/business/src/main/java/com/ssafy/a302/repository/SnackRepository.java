package com.ssafy.a302.repository;

import com.ssafy.a302.domain.Snack;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SnackRepository extends JpaRepository<Snack,String> {
	@Query(value = "SELECT * FROM SNACK order by RAND() limit 10",nativeQuery = true)
	List<Snack> findTop10Rand();
}
