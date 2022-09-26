package com.ssafy.a302.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.Purchase;
import com.ssafy.a302.domain.Snack;
import com.ssafy.a302.domain.SubscribtionHistory;
import com.ssafy.a302.domain.Toy;
import com.ssafy.a302.domain.Users;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SubscriptionsHistoryRepository extends JpaRepository<SubscribtionHistory, Integer>{
	@Query("select s from SubscribtionHistory s where s.users.usersSno = :userId and s.startDate <= CURRENT_DATE and s.endDate > CURRENT_DATE")
	List<SubscribtionHistory> findSubNowByUserId(String userId);

	@Query("select s from SubscribtionHistory s where s.users.usersSno = :userId")
	List<SubscribtionHistory> findSubAllByUserId(String userId);

	@Query("select p from Purchase p where p.subscribtionHistory.subscribtionHistoryNo = :subId")
	List<Purchase> findPurchaseBySubId(String subId);

	@Query("select f from Feed f join f.feedEffects join f.feedMaterials join f.feedTargets join f.grade join f.particle where f.feedSno = :feedId")
	List<Feed> findFeedInfo(String feedId);

	@Query("select t from Toy t where t.toySno = :toyId")
	List<Toy> findToyInfo(String toyId);

	@Query("select s from Snack s join s.snackEffects join s.snackMaterials join s.snackTargets join s.grade join s.particle where s.snackSno = :snackId")
	List<Snack> findSnackInfo(String snackId);

	}
