package com.ssafy.a302.repository;

import com.ssafy.a302.domain.Feed;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedRepository extends JpaRepository<Feed,String> {
	@Query(value = "SELECT * FROM FEED order by RAND() limit 10",nativeQuery = true)
	List<Feed> findTop10Rand();
	List<Feed> findByFeedSnoIn(@Param("list") List<String> list);
	Feed findTop1ByFeedSno(@Param("feedSno") String feedSno);
}
