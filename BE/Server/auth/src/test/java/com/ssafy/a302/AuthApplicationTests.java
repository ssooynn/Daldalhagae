package com.ssafy.a302;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.a302.controller.UsersController;
import com.ssafy.a302.dto.UsersDto;

@WebMvcTest(UsersController.class)
@AutoConfigureRestDocs
class AuthApplicationTests {
//	@Autowired
//	private MockMvc mockMvc;
//	@Autowired
//	private ObjectMapper objectMapper;
//	
//	@Test
//	public void loginUsersAPI() throws Exception{
//		String content = objectMapper.writeValueAsString(new UsersDto("s","kakao","email","name","phone","address"));
//
//		mockMvc.perform(MockMvcRequestBuilders
//				.post("/user/signup")
//				.contentType(MediaType.APPLICATION_JSON)
//				.accept(MediaType.APPLICATION_JSON)
//				.characterEncoding("UTF-8")
//				.content(content)).andExpect(status().isOk());
//	}

}
