package com.ssafy.a302.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringCloudGatewayRouting {
//	@Bean
//	public RouteLocator configurationRoute(RouteLocatorBuilder rlb) {
//
//        return rlb.routes()
//                .route("authId", r -> r.path("/api-gateway/auth-api/**").uri("lb://AUTH-API"))
//                .route("businessId", r -> r.path("/api-gateway/business-api/**").uri("lb://BUSINESS"))
//                .build();
//    }
}
