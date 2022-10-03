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
	public RecommendRes recommend(String petSno) {
//		ResponseEntity<Map> responseEntity = requestFast(petSno);
//		List<String> feeds = (List<String>) responseEntity.getBody().get("feeds");
//		List<String> snacks = (List<String>) responseEntity.getBody().get("snacks");
//		List<String> toys = (List<String>) responseEntity.getBody().get("toys");
//		List<Feed> feedList =feedRep.findByFeedSnoIn(feeds);
//		List<Snack> snackList =snackRep.findBySnackSnoIn(snacks);
//		List<Toy> toyList =toyRep.findByToySnoIn(toys);
		
//		log.info("feed : {}",feedList.size());
//		log.info("snack : {}",snackList.size());
//		log.info("toy : {}",toyList.size());

		List<String> feeds = new ArrayList<String>();
		List<String> snacks = new ArrayList<String>();
		List<String> toys = new ArrayList<String>();
		feeds.add("f05C8ZXZjHZrZaeUB8eYN");
		feeds.add("f0i4tJenuSL6PgjIhxSae");
		feeds.add("f0j9YWBhZVd1FmDb7T2Am");
		snacks.add("s07dPUgvRaaiV5eGyOFna");
		snacks.add("s0Cg9gcgztbdeG3zHo9FS");
		snacks.add("s0hfieToEaO96HP99xqxc");
		toys.add("T06pFAhAD5wgNV4Eq497F");
		toys.add("T018jGPXn0Vej3iLUgc9S");
		toys.add("T0Y1bsNon4xDt1VYTQYA7");
		
		List<Feed> feedList =feedRep.findByFeedSnoIn(feeds);
		List<Snack> snackList =snackRep.findBySnackSnoIn(snacks);
		List<Toy> toyList =toyRep.findByToySnoIn(toys);
		Payment payment = new Payment();
		paymentRep.save(payment);
		int paymentNo = payment.getPaymentNo();
		
		RecommendRes recommendRes = new RecommendRes(feedList, snackList, toyList, filePath.getReviewImageLoadPath(), itemReviewRep, paymentNo);
		return recommendRes;
	}
	
	/* fast api에서 값 가져오기 */
	private ResponseEntity<Map> requestFast(String petSno){
		return restTemplate.getForEntity("http://localhost:8000/api/item/"+petSno, Map.class);
	}
}
