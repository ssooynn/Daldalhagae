package com.ssafy.a302.controller;

import com.ssafy.a302.dto.RecommandedtemDto;
import com.ssafy.a302.dto.UserDto;
import com.ssafy.a302.service.ItemService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
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

    @ApiOperation(value="추천 제품 조회", notes = "cnt1_사료, cnt2_간식, cnt3_장난감")
    @GetMapping("/{subSno}")
    public ResponseEntity<?> getMyRecommendedProduct(@PathVariable("subSno") String subSno){
        RecommandedtemDto recommandedtemDto = new RecommandedtemDto();
        return ResponseEntity.ok(recommandedtemDto);
    }

}
