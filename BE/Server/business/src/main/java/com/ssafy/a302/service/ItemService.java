package com.ssafy.a302.service;

import java.util.List;

import com.ssafy.a302.response.FastFeed;
import com.ssafy.a302.response.FastSnack;

public interface ItemService {
	List<FastFeed> getFeed();
	List<FastSnack> getSnack();
}
