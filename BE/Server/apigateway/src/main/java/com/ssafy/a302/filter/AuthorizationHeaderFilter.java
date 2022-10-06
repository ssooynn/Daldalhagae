package com.ssafy.a302.filter;

import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import com.google.common.net.HttpHeaders;
import com.ssafy.a302.jwt.VerificationJWT;
import com.ssafy.a302.service.RedisService;

import io.netty.handler.codec.http.HttpScheme;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@Slf4j
@Component
public class AuthorizationHeaderFilter extends AbstractGatewayFilterFactory<AuthorizationHeaderFilter.Config> {

	@Autowired
	VerificationJWT verificationJWT;

	public AuthorizationHeaderFilter() {
		super(Config.class);
	}

	public static class Config {
	}

	@Override
	public GatewayFilter apply(Config config) {
		return (exchange, chain) -> {
			ServerHttpRequest request = exchange.getRequest();

			try {

				// Request Header 에 token 이 존재하지 않을 때
				if (!request.getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
					return handleUnAuthorized(exchange);
				}

				// Request Header 에서 token 문자열 받아오기
				List<String> token = request.getHeaders().get(HttpHeaders.AUTHORIZATION);
				String accessToken = Objects.requireNonNull(token).get(0);
				log.info("bearer token : {}", accessToken);
				accessToken = accessToken.replace("Bearer ", "").trim();
				log.info("token : {}", accessToken);

//				// 토큰 정보가 redis에 있는지 확인
//				if (!verificationJWT.existAccessToken(accessToken)) {
//					log.info("----------------해당 토큰이 redis에 없음");
//					return handleUnAuthorized(exchange);
//				}
				if(accessToken == null || !accessToken.equals("a.a.a")) {
					return handleUnAuthorized(exchange);
				}

			} catch (Exception e) {
				log.info("토큰 예외");
				e.printStackTrace();
				return handleUnAuthorized(exchange);
			}

			return chain.filter(exchange);
		};
	}

	// 인증 실패시 401 반환
	private Mono<Void> handleUnAuthorized(ServerWebExchange exchange) {
		ServerHttpResponse response = exchange.getResponse();

		response.setStatusCode(HttpStatus.UNAUTHORIZED);
		return response.setComplete();
	}

}
