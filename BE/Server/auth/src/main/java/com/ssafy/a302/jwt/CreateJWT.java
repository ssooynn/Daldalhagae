package com.ssafy.a302.jwt;

import java.time.Duration;
import java.util.Base64;
import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.AlgorithmMismatchException;
import com.ssafy.a302.common.Utils;
import com.ssafy.a302.service.RedisService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class CreateJWT {
	private final RedisService redisService;

	@Value("${JWT_TOKEN}")
	private String secretKey;

	@Value("${JWT_ISSUER}")
	private String issuer;

	@PostConstruct
	protected void init() {
		secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
	}

	/* 토큰 생성 */
	public String createToken(String usersSno) {
		Date now = new Date();
		// 만료 시간
		Date expriation = new Date(now.getTime() + Duration.ofHours(1).toMillis());

		return Jwts.builder().setHeaderParam(Header.TYPE, Header.JWT_TYPE) // 헤더에 담을 정보
				.setIssuer(issuer) // 발급자
				.setIssuedAt(now) // 발급 시간
				.setExpiration(expriation) // 만료 시간
				.setSubject(usersSno) // 토큰 제목
				.signWith(SignatureAlgorithm.HS256, secretKey.getBytes()) // 알고리즘, 시크릿 키
				.compact();
	}

	/* 로그인 시 accessToken 생성 및 redis 저장 */
	public String createAccessToken(String usersSno) {
		String token = createToken(usersSno);
		redisService.setValues(usersSno, token, Duration.ofHours(1));
		return token;
	}

	/* 로그아웃 시 아이디 가져오기 */
	public String getAuth(String accessToken) {
		Claims claims = Jwts.parserBuilder().setSigningKey(secretKey.getBytes()).build().parseClaimsJws(accessToken).getBody();
		return claims.getSubject();
	}

}
