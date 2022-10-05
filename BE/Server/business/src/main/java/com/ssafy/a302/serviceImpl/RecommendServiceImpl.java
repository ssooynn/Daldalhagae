package com.ssafy.a302.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ssafy.a302.domain.*;
import com.ssafy.a302.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.a302.common.FilePath;
import com.ssafy.a302.request.RecoReq;
import com.ssafy.a302.response.RecommendRes;
import com.ssafy.a302.service.RecommendService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class RecommendServiceImpl implements RecommendService {
	private final RestTemplate restTemplate;
	private final FeedRepository feedRep;
	private final PetRepository petRep;
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

		if (feeds.size() > 0) {
			feedList = feedRep.findByFeedSnoInFetch(feeds);
		}

		if (snacks.size() > 0) {
			snackList = snackRep.findBySnackSnoInFetch(snacks);
		}

		if (toys.size() > 0) {
			toyList = toyRep.findByToySnoIn(toys);
		}

		Payment payment = new Payment();
		paymentRep.save(payment);
		int paymentNo = payment.getPaymentNo();

		RecommendRes recommendRes = new RecommendRes(feedList, snackList, toyList, filePath.getReviewImageLoadPath(),
				itemReviewRep, paymentNo);
		return recommendRes;
//		return null;
	}

	/* fast api에서 값 가져오기 */
	private ResponseEntity<Map> requestFast(String petSno) {
		StringBuilder sb = new StringBuilder();
		sb.append("alergy=");
		List<PetMaterial> petMaterialList = petRep.findByPetSno(petSno).getPetMaterials();
		if (petMaterialList.size() > 0) {
			for (PetMaterial petMaterial : petMaterialList) {
				sb.append(petMaterial.getMaterial().getMaterialNo() + ",");
			}
			sb.deleteCharAt(sb.length() - 1);
		} else {
			sb.append(0);
		}

		return restTemplate.getForEntity("https://j7a302.p.ssafy.io/recommend-api/item/" + petSno + "?" + sb,
				Map.class);
//		return restTemplate.getForEntity("http://localhost:8000/recommend-api/item/"+petSno+"?"+sb, Map.class);
	}
}
