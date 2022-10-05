package com.ssafy.a302.controller;

import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.response.FastFeed;
import com.ssafy.a302.response.FastSnack;
import com.ssafy.a302.service.ItemService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value="아이템 컨트롤러")
@RestController
@RequestMapping("item")
@RequiredArgsConstructor
public class ItemContoroller {
    private final ItemService itemService;

    @GetMapping("/feed")
    public List<FastFeed> getFeed(){
    	return itemService.getFeed();
    	
    }
    @GetMapping("/snack")
    public List<FastSnack> getSnack(){
    	return itemService.getSnack();
    }
}
