package com.ssafy.a302.filter;

import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import com.google.common.net.HttpHeaders;
import com.ssafy.a302.service.RedisService;

import io.netty.handler.codec.http.HttpScheme;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Component
public class AuthorizationHeaderFilter extends AbstractGatewayFilterFactory<AuthorizationHeaderFilter.Config>{
	@Autowired
	RedisService redisService;
	
    public AuthorizationHeaderFilter() {
        super(Config.class);
    }

    public static class Config {
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
        	ServerHttpRequest request = exchange.getRequest();
        	System.out.println(32423);

            // Request Header 에 token 이 존재하지 않을 때
            if(!request.getHeaders().containsKey(HttpHeaders.AUTHORIZATION)){
            	return handleUnAuthorized(exchange);
            }

            // Request Header 에서 token 문자열 받아오기
            List<String> token = request.getHeaders().get(HttpHeaders.AUTHORIZATION);
            String tokenString = Objects.requireNonNull(token).get(0);
            tokenString = tokenString.replace("Bearer", "").trim();
            System.out.println(tokenString);
            if(!tokenString.equals("a.a.a")) {
            	return handleUnAuthorized(exchange);
            }
            
            return chain.filter(exchange);
        };
    }

        // 성공적으로 검증이 되었기 때문에 인증된 헤더로 요청을 변경해준다. 서비스는 해당 헤더에서 아이디를 가져와 사용한다.
    private Mono<Void> handleUnAuthorized(ServerWebExchange exchange) {
        ServerHttpResponse response = exchange.getResponse();

        response.setStatusCode(HttpStatus.UNAUTHORIZED);
        return response.setComplete();
    }

    
}
