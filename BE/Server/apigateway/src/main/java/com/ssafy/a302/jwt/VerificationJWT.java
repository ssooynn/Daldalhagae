package com.ssafy.a302.jwt;

import java.time.Duration;
import java.util.Base64;
import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.ssafy.a302.service.RedisService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class VerificationJWT {
	private final RedisService redisService;

	@Value("${JWT_TOKEN}")
	private String secretKey;

	@Value("${JWT_ISSUER}")
	private String issuer;

	@PostConstruct
	protected void init() {
		secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
	}

	/* 로그아웃 시 아이디 가져오기 */
	public String getAuth(String accessToken) {
		Claims claims = Jwts.parserBuilder().setSigningKey(secretKey.getBytes()).build().parseClaimsJws(accessToken).getBody();
		return claims.getSubject();
	}
	
	/* 해당 토큰이 레디스에 있는지 확인 */
	public boolean existAccessToken(String accessToken) {
		log.info("accessToken : {}",accessToken);
		String key = getAuth(accessToken);
		String value= redisService.getValues(key);
		log.info("key : {}",key);
		log.info("value : {}",value);
		if(value !=null && value.equals(accessToken)) {
			return true;
		}
		
		return false;
	}

}
