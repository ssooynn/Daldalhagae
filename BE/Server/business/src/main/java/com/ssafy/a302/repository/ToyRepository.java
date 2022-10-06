package com.ssafy.a302.repository;

import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.Toy;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ToyRepository extends JpaRepository<Toy,String> {
	@Query(value = "SELECT * FROM TOY order by RAND() limit 10",nativeQuery = true)
	List<Toy> findTop10Rand();
	List<Toy> findByToySnoIn(@Param("list") List<String> list);

}
