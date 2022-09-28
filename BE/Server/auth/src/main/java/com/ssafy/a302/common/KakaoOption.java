package com.ssafy.a302.common;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class KakaoOption {
	@Value("${KAKAO_REST_API_KEY}")
	String kakaoRestApiKey;
	@Value("${KAKAO_REDIRECT_URL}")
	String kakaoRedirectUrl;
}
