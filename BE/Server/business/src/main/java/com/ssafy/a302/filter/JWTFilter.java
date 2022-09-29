package com.ssafy.a302.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;

import com.google.common.net.HttpHeaders;


public class JWTFilter implements Filter{

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		System.out.println(324235);
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		String authorization = req.getHeader(HttpHeaders.AUTHORIZATION);
        if(authorization ==null || !authorization.startsWith("Bearer ")){
        	handleUnAuthorized(res);
        	return;
        }
        System.out.println("-------------------------------------------------------------------------------------------");
        authorization = authorization.replace("Bearer", "").trim();
        if(!authorization.equals("a.a.a")) {
        	handleUnAuthorized(res);
        	return;
        }
        
        chain.doFilter(req, res);
        
	}

	
    // 인증 실패시 401 반환
    private void handleUnAuthorized(HttpServletResponse res) {
        res.setStatus(HttpStatus.UNAUTHORIZED.value());
    }
}
