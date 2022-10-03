package com.ssafy.a302.repository;

import com.ssafy.a302.domain.ServiceReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ServiceReviewRepository extends JpaRepository<ServiceReview,Integer> {
    @Query("select s from ServiceReview s where s.rate > 4 and s.image is not null order by s.rate, s.regDate desc")
    List<ServiceReview> getServiceReviewByRate();
}
