package com.ssafy.a302.service;

import com.netflix.discovery.converters.Auto;
import com.ssafy.a302.domain.*;
import com.ssafy.a302.dto.ItemReviewDto;
import com.ssafy.a302.repository.*;
import com.ssafy.a302.request.ItemReviewReq;
import com.ssafy.a302.request.ServiceReviewReq;
import com.ssafy.a302.response.ItemReviewRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.beans.Transient;
import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewService {
    @Autowired
    ItemReviewRepository itemReviewRepository;
    @Autowired
    UsersRepository usersRepository;
    @Autowired
    PurchaseRepository purchaseRepository;
    @Autowired
    PetRepository petRepository;

    @Autowired
    FeedRepository feedRepository;
    @Autowired
    ToyRepository toyRepository;
    @Autowired
    SnackRepository snackRepository;
    @Autowired
    SubscribtionHistoryRepository subscribtionHistoryRepository;


    /*pk조회. */
    public ItemReview findByItemReviewNo(int itemReviewNo) {
        return itemReviewRepository.findByItemReviewNo(itemReviewNo);
    }

    /*유저sno로 리뷰조회 :item 따로조회해서 dto에넣어주기.*/
    public List<ItemReviewRes> findByUsers_UsersSno(String usersSno) {
        List<ItemReview> itemReviews= itemReviewRepository.findByUsers_UsersSno(usersSno);
        List<ItemReviewRes> itemReviewResList = new ArrayList<>();
        //dto build
        for(ItemReview review :itemReviews){
            ItemReviewRes itemReviewRes = new ItemReviewRes();
            if(review.getItemSno().startsWith("f")){

            }

        }
        return itemReviewResList;
    }

    //
    public Integer saveReview(ServiceReviewReq serviceReviewReq) {
        //getOne vs findById

//        Purchase purchase = purchaseRepository.findById(itemReviewReq.getPurchaseNo()).orElse(null);;
//        Users users = usersRepository.findById(itemReviewReq.getUserSno()).get();
//        Pet pet = petRepository.findById(itemReviewReq.getPetSno()).get();

        SubscribtionHistory subscribtionHistory= subscribtionHistoryRepository.findById(serviceReviewReq.getSubscriptionNo()).get();
        //serviceReview 저장
        subscribtionHistory.getServiceReviews();

        //itemReview 저장
        for(ItemReviewReq itemReviewReq:serviceReviewReq.getItemReviewReqList()){
            ItemReview itemReview = ItemReview.builder()
                    .itemSno(itemReviewReq.getItemSno())
                    .rate(itemReviewReq.getRate())
                    .content(itemReviewReq.getContent())
                    .purchase(purchaseRepository.findById(itemReviewReq.getPurchaseNo()).get())
                    .users(subscribtionHistory.getUsers())
                    .pet(subscribtionHistory.getPet())
                    .image(".")//s3 저장후 링크url
                    .build();
            itemReviewRepository.save(itemReview);
        }
        return null;
    }




}
