package com.ssafy.a302.controller;

import com.ssafy.a302.domain.*;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.repository.FeedRepository;
import com.ssafy.a302.repository.SnackRepository;
import com.ssafy.a302.response.FeedTemp;
import com.ssafy.a302.response.SnackTemp;
import com.ssafy.a302.service.ItemService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Api(value="아이템 컨트롤러")
@RestController
@RequestMapping("item")
@RequiredArgsConstructor
public class ItemContoroller {
    private final ItemService itemService;
    @Autowired
    private final FeedRepository feedRepository;
    @Autowired
    private final SnackRepository snackRepository;


    //	파이썬에서 구현할 예정
//    @ApiOperation(value="추천 제품 조회", notes = "cnt1_사료, cnt2_간식, cnt3_장난감")
//    @GetMapping("/{subSno}")
//    public ResponseEntity<?> getMyRecommendedProduct(@PathVariable("subSno") String subSno){
//        RecommandedtemDto recommandedtemDto = new RecommandedtemDto();
//        return ResponseEntity.ok(recommandedtemDto);
//    }
@GetMapping("/feed")
public List<FeedTemp> feed(){
    List<FeedTemp> feedTempList=new ArrayList<>();
    List<Feed> list = feedRepository.findAll();
    for(Feed feed : list){
        List<Integer> materials =new ArrayList<>();
        List<Integer> effects =new ArrayList<>();
        List<Integer> targets =new ArrayList<>();
        for (FeedEffect feedEffect :feed.getFeedEffects()){
            effects.add(feedEffect.getEffect().getEffectNo());
        }
        for (FeedMaterial feedMaterial :feed.getFeedMaterials()){
            materials.add(feedMaterial.getMaterial().getMaterialNo());
        }
        for (FeedTarget feedTarget :feed.getFeedTargets()){
            targets.add(feedTarget.getTarget().getTargetNo());
        }

        FeedTemp feedtemp= FeedTemp.builder()
                .item_sno(feed.getFeedSno())
                .grade(feed.getGrade().getGradeNo())
                .particle(feed.getParticle().getParticleNo())
                .materials(materials)
                .effects(effects)
                .targets(targets)
                .build();
        feedTempList.add(feedtemp);
    }
    return feedTempList;
//		return null;
}
    @GetMapping("/snack")
    public List<SnackTemp> snack(){
        List<Snack> list = snackRepository.findAll();
        List<SnackTemp> snackTempList = new ArrayList<>();

        for(Snack snack : list) {
            List<Integer> materials =new ArrayList<>();
            List<Integer> effects =new ArrayList<>();
            List<Integer> targets =new ArrayList<>();

            for (SnackEffect snackEffect :snack.getSnackEffects()) {
                effects.add(snackEffect.getEffect().getEffectNo());
            }
            for (SnackMaterial snackMaterial : snack.getSnackMaterials()) {
                materials.add(snackMaterial.getMaterial().getMaterialNo());
            }
            for (SnackTarget snackTarget : snack.getSnackTargets()) {
                targets.add(snackTarget.getTarget().getTargetNo());
            }
            SnackTemp snackTemp = SnackTemp.builder()
                    .item_sno(snack.getSnackSno())
                    .materials(materials)
                    .effects(effects)
                    .targets(targets)
                    .build();
            snackTempList.add(snackTemp);
        }
        return snackTempList;
    }



}
