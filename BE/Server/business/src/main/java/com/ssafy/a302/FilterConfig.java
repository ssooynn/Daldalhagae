package com.ssafy.a302;

import java.util.Arrays;

import javax.servlet.Filter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.ssafy.a302.filter.JWTFilter;

@Configuration
public class FilterConfig implements WebMvcConfigurer{
	@Bean
	public FilterRegistrationBean<Filter> getFilterRegistrationBean() {
		FilterRegistrationBean<Filter> registrationBean = new FilterRegistrationBean<Filter>(new JWTFilter());
		registrationBean.setOrder(Integer.MIN_VALUE);
		//registrationBean.addUrlPatterns("/*");
		registrationBean.setUrlPatterns(Arrays.asList("/pet/*", "/review", "/review/unrated/*","/user/*","/subscription/*"));
		return registrationBean;
	}
}
