package com.ssafy.a302;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
@EnableWebMvc
public class SwaggerConfig {

	@Bean
	public InternalResourceViewResolver defaultViewResolver() {
		return new InternalResourceViewResolver();
	}

	@Bean
	public Docket swaggerAPI() {
		// Docket : swagger Bean
		return new Docket(DocumentationType.OAS_30).useDefaultResponseMessages(true) // 기본 응답 메시지 표시 여부
				.select().apis(RequestHandlerSelectors.basePackage("com.ssafy.a302")) // swagger탐색 대상 패키지
				.paths(PathSelectors.any()).build().apiInfo(apiInfo());
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("달달하개 Swagger").description("swaggggg").version("1.0").build();
	}

}