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
		feeds.add("fiiayczyaQqfHxVDBC0Jn");
		feeds.add("fG6WPVgrEnPtRmKtr3hOC");
		feeds.add("fe0Y4s6jpd3cDJ5oUw72E");
		feeds.add("fcIamF4JXrVtT4HIgnD63");
		feeds.add("fbbbuJOP4ev6fvIhMsCam");
		feeds.add("famt7yPjM0HbhF1nMSNG1");
		
		snacks.add("s07dPUgvRaaiV5eGyOFna");
		snacks.add("s0Cg9gcgztbdeG3zHo9FS");
		snacks.add("s0hfieToEaO96HP99xqxc");
		snacks.add("s8tcgSV5qgDKIvMSBTdxe");
		snacks.add("s8hZ7ktN2cu3ZIqmVCAb6");
		snacks.add("s7vq8kGkBvsBriVJFmT14");
		snacks.add("s6eQcYeI2Eci2slkCHyVL");
		snacks.add("s5JdZv9Soz6WhjTlz8Amb");
		snacks.add("s5CCctpjeGCtMrTWT1e9y");
		
		toys.add("T06pFAhAD5wgNV4Eq497F");
		toys.add("T018jGPXn0Vej3iLUgc9S");
		toys.add("T0Y1bsNon4xDt1VYTQYA7");
		toys.add("T2Ss8MqdRbLvqaIK4ZD0X");
		toys.add("T2y7c2NI1m2gf87XF69pR");
		toys.add("T3MYEPFKl42oCGV3JX5Y6");
		toys.add("T4y1ac7x16tC5O6VxQ86z");
		toys.add("T5h9xz6FW2puwZcT549c1");
		toys.add("T5iUs81D0IsAzs6lkpkHa");
		
		long feedStart = System.currentTimeMillis();
		List<Feed> feedList =feedRep.findByFeedSnoInFetch(feeds);
		long feedend = System.currentTimeMillis();
		log.info("---------------------------------- 사료 찾는 시간 : {}", feedend-feedStart);
		List<Snack> snackList =snackRep.findBySnackSnoInFetch(snacks);
		List<Toy> toyList =toyRep.findByToySnoIn(toys);
		Payment payment = new Payment();
		paymentRep.save(payment);
		int paymentNo = payment.getPaymentNo();
		
		RecommendRes recommendRes = new RecommendRes(feedList, snackList, toyList, filePath.getReviewImageLoadPath(), itemReviewRep, paymentNo);
		return recommendRes;
//		return null;
	}
	
	/* fast api에서 값 가져오기 */
	private ResponseEntity<Map> requestFast(String petSno){
		return restTemplate.getForEntity("http://localhost:8000/api/item/"+petSno, Map.class);
	}
}
