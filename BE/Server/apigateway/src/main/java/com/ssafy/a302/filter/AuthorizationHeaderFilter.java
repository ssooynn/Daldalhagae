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
import com.ssafy.a302.service.RedisService;

import io.netty.handler.codec.http.HttpScheme;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Component
public class AuthorizationHeaderFilter extends AbstractGatewayFilterFactory<AuthorizationHeaderFilter.Config>{
	@Autowired
	RedisService redisService;
	
	@Value("${AUTH_SERVER_PAHT}")
	String authPath;
	@Value("${BUSINESS_SERVER_PATH}")
	String businessPath;
	
    public AuthorizationHeaderFilter() {
        super(Config.class);
    }

    public static class Config {
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
        	ServerHttpRequest request = exchange.getRequest();
        	
//        	String uri = request.getURI().getPath();
//        	
//        	if(uri.startsWith(authPath)) {
//        		if(!uri.replace(authPath, "").startsWith("user/logout"))
//        			return chain.filter(exchange);
//        	}else if(uri.startsWith(businessPath)){
//        		uri = uri.replace(businessPath, "");
//        		if(uri.startsWith("pet") ||
//        				uri.startsWith("/"))
//        			/pet/*", "/review", "/review/unrated/*/
//        	}
        	
        	
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

        // 인증 실패시 401 반환
    private Mono<Void> handleUnAuthorized(ServerWebExchange exchange) {
        ServerHttpResponse response = exchange.getResponse();

        response.setStatusCode(HttpStatus.UNAUTHORIZED);
        return response.setComplete();
    }

    
}
