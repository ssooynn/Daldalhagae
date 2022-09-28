package com.ssafy.a302.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.a302.common.KakaoOption;
import com.ssafy.a302.common.Utils;
import com.ssafy.a302.response.LoginReq;
import com.ssafy.a302.service.UsersService;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class SocialController {
	private final KakaoOption kakaoOption;
	private final RestTemplate restTemplate;
	private final UsersService usersService;
	
	@GetMapping("/code/kakao")
	public String getCode(@RequestParam String code) {
		return code;
	}
	
	
	@ApiOperation(value = "로그인")
	@PostMapping("/login")
	public LoginReq login(@RequestBody Map<String, Object> map) throws Exception {

		Object object = map.get("code");
		if (!(object instanceof String) || object==null) {
			throw new Exception();
		}
		String code = (String) object;
		
		String accessToken = getAccessToken(code);
		ResponseEntity<String> kakaoInfoResponse = getKakaoInfo(accessToken);
		
		String kakaoInfoResponseBody = kakaoInfoResponse.getBody();
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode jsonNode = objectMapper.readTree(kakaoInfoResponseBody);
		
		String kakaoId = jsonNode.get("id").asText();
		
		return usersService.login(kakaoId);
	}
	
//	@ApiOperation(value = "회원 체크")
//	@PostMapping("/check")
//	public Map<String,String> check(@RequestBody Map<String, Object> map) throws Exception {
//		Map<String,String> data = new HashMap<String, String>();
//		
//		Object object = map.get("code");
//		if (!(object instanceof String) || object==null) {
//			throw new Exception();
//		}
//		String code = (String) object;
//		
//		String accessToken = getAccessToken(code);
//		ResponseEntity<String> kakaoInfoResponse = getKakaoInfo(accessToken);
//		
//		String kakaoInfoResponseBody = kakaoInfoResponse.getBody();
//		ObjectMapper objectMapper = new ObjectMapper();
//		JsonNode jsonNode = objectMapper.readTree(kakaoInfoResponseBody);
//		
//		String kakaoId = jsonNode.get("id").asText();
//		if(usersService.existsByKakaoId(kakaoId)) {
//			data.put("message", Utils.FAIL);
//			return data;
//		}
//		data.put("message", Utils.SUCCESS);
//		data.put("kakaoId",kakaoId);
//		return data;
//	}

	@ApiOperation(value = "로그아웃")
	@PostMapping("/logout")
	public String logout(@RequestBody Map<String, Object> map, HttpServletRequest req) throws Exception {
		String token = req.getHeader(Utils.AUTHORIZATION).replace(Utils.BEARER, "").trim();

		Object object = map.get("usersSno");
		if (!(object instanceof String)) {
			throw new Exception();
		}

		if (usersService.logout((String) object, token))
			return Utils.SUCCESS;
		return Utils.FAIL;
	}
	
	
	
	
	/* 코드로 kakao에서 accessToken 받아오기  */
	public String getAccessToken(String code) throws JsonMappingException, JsonProcessingException{
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
		HttpEntity<MultiValueMap<String, String>> kakaoToeknRequest=
				new HttpEntity<>(generateParam(code),headers);
		
		ResponseEntity<String> tokenResponse = requestAuth(kakaoToeknRequest);
		String toeknResponseBody = tokenResponse.getBody();
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode jsonNode = objectMapper.readTree(toeknResponseBody);
		
		return jsonNode.get("access_token").asText();
	}
	
	/* kakao에 코드를 보낼때 body에 담아야 하는 것들 넣기 */
	private MultiValueMap<String, String> generateParam(String code){
		MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
		params.add("grant_type", "authorization_code");
		params.add("client_id", kakaoOption.getKakaoRestApiKey());
		params.add("redirect_uri", kakaoOption.getKakaoRedirectUrl());
		params.add("code", code);
		return params;
	}
	
	/* body에 코드와 정보가 담긴 httpEntity를 kakao에 요청하기 */
	private ResponseEntity<String> requestAuth(HttpEntity request){
		return restTemplate.exchange("https://kauth.kakao.com/oauth/token", 
				HttpMethod.POST,
				request,
				String.class);
	}
	
	/* access 토큰으로 사용자 정보 받아오기 */
	private ResponseEntity<String> getKakaoInfo(String accessToken){
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization","Bearer "+accessToken);
		headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
		return requestProfile(new HttpEntity<>(headers));
	}
	
	/* accessToken이 헤더에 담긴 httpentity를 kakao에 보내서 사용자 정보 가져오기 */
	private ResponseEntity<String> requestProfile(HttpEntity request){
		return restTemplate.exchange("https://kapi.kakao.com/v2/user/me", 
				HttpMethod.POST,
				request,
				String.class);
	}

}
