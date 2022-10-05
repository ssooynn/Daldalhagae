package com.ssafy.a302.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.a302.common.FilePath;
import com.ssafy.a302.domain.Feed;
import com.ssafy.a302.domain.Payment;
import com.ssafy.a302.domain.Snack;
import com.ssafy.a302.domain.Toy;
import com.ssafy.a302.repository.FeedRepository;
import com.ssafy.a302.repository.ItemReviewRepository;
import com.ssafy.a302.repository.PaymentRepository;
import com.ssafy.a302.repository.SnackRepository;
import com.ssafy.a302.repository.ToyRepository;
import com.ssafy.a302.request.RecoReq;
import com.ssafy.a302.response.RecommendRes;
import com.ssafy.a302.service.RecommendService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class RecommendServiceImpl implements RecommendService{
	private final RestTemplate restTemplate;
	private final FeedRepository feedRep;
	private final SnackRepository snackRep;
	private final ToyRepository toyRep;
	private final ItemReviewRepository itemReviewRep;
	private final FilePath filePath;
	private final PaymentRepository paymentRep;
	
	@Override
	public RecommendRes recommend(RecoReq recoReq) {
		ResponseEntity<Map> responseEntity = requestFast(recoReq.getPetSno());
		List<String> feeds = (List<String>) responseEntity.getBody().get("feeds");
		List<String> snacks = (List<String>) responseEntity.getBody().get("snacks");
		List<String> toys = (List<String>) responseEntity.getBody().get("toys");
		
		List<Feed> feedList = new ArrayList<Feed>();
		List<Snack> snackList = new ArrayList<Snack>();
		List<Toy> toyList = new ArrayList<Toy>();

		if(feeds.size()>0) {
			feedList =feedRep.findByFeedSnoInFetch(feeds);
		}
	
		if(snacks.size()>0) {
			snackList =snackRep.findBySnackSnoInFetch(snacks);
		}
		
		if(toys.size()>0) {
			toyList =toyRep.findByToySnoIn(toys);
		}
		
		Payment payment = new Payment();
		paymentRep.save(payment);
		int paymentNo = payment.getPaymentNo();
		
		RecommendRes recommendRes = new RecommendRes(feedList, snackList, toyList, filePath.getReviewImageLoadPath(), itemReviewRep, paymentNo);
		return recommendRes;
//		return null;
	}
	
	/* fast api에서 값 가져오기 */
	private ResponseEntity<Map> requestFast(String petSno){
		return restTemplate.getForEntity("https://j7a302.p.ssafy.io/recommend-api/item/"+petSno, Map.class);
	}
}
