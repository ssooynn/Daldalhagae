package com.ssafy.a302.service;

import com.ssafy.a302.request.RecoReq;
import com.ssafy.a302.response.RecommendRes;

public interface RecommendService {
	RecommendRes recommend(RecoReq recoReq);
}
