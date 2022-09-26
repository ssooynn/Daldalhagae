package com.ssafy.a302.service;

import com.netflix.discovery.converters.Auto;
import com.ssafy.a302.domain.*;
import com.ssafy.a302.dto.ItemReviewDto;
import com.ssafy.a302.repository.*;
import com.ssafy.a302.request.ItemReviewReq;
import com.ssafy.a302.request.ServiceReviewReq;
import com.ssafy.a302.response.ItemReviewRes;
import com.ssafy.a302.response.MyReviewRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.beans.Transient;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ReviewService {
    @Autowired
    ItemReviewRepository itemReviewRepository;
    @Autowired
    ServiceReviewRepository serviceReviewRepository;
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

    /*상품 리뷰 조회: 리뷰pk */
    public ItemReview findByItemReviewNo(int itemReviewNo) {
        return itemReviewRepository.findByItemReviewNo(itemReviewNo);
    }
    /*상품리뷰목록 조회: 상품번호*/
    public  List<ItemReviewRes> findByItemSno(String itemSno){
        List<ItemReview> itemReviews = itemReviewRepository.findByItemSno(itemSno);
        List<ItemReviewRes> itemReviewResList = new ArrayList<>();
        for(ItemReview itemreview :itemReviews){
            ItemReviewRes itemReviewRes = itemreview.toItemReviewRes();
            Item item = getItem(itemreview.getItemSno());
            itemReviewRes.setItemName(item.getName());
            itemReviewResList.add(itemReviewRes);
        }
        return itemReviewResList;
    }

    /*상품리뷰목록 조회: 유저번호*/
    public List<ItemReviewRes> findByUsersSno(String usersSno) {
        List<ItemReview> itemReviews= itemReviewRepository.findByUsers_UsersSno(usersSno);
        List<ItemReviewRes> itemReviewResList = new ArrayList<>();
        //dto build
        for(ItemReview itemreview :itemReviews){
            ItemReviewRes itemReviewRes = itemreview.toItemReviewRes();
            Item item = getItem(itemreview.getItemSno());
            itemReviewRes.setItemName(item.getName());
            itemReviewResList.add(itemReviewRes);
        }
        return itemReviewResList;
    }
    /*내 리뷰 전체 조회*/
    public List<MyReviewRes> getMyReviews(String usersSno){
        //MyReviewRes 생성.
        List<MyReviewRes> myReviewList = new ArrayList<>();
        List<SubscribtionHistory> subscribtionHistoryList=subscribtionHistoryRepository.findByUsers_UsersSno(usersSno);
        for(SubscribtionHistory subscribtionHistory: subscribtionHistoryList){
            MyReviewRes myReviewRes = new MyReviewRes();
            myReviewRes.setSubscriptionNo(subscribtionHistory.getSubscribtionHistoryNo());
            myReviewRes.setSubscriptionName(subscribtionHistory.getSubscribtionHistorySubscribtion().getSubscribtion().getName());
            myReviewRes.setSubscriptionStartDate(subscribtionHistory.getStartDate());
            myReviewRes.setSubscriptionStartDate(subscribtionHistory.getEndDate());
            myReviewRes.setServiceReviewNo(subscribtionHistory.getServiceReview().getServiceReviewNo());
            myReviewRes.setServiceReviewRate(subscribtionHistory.getServiceReview().getRate());
            myReviewRes.setServiceReviewContent(subscribtionHistory.getServiceReview().getContent());
            myReviewRes.setServiceReviewImg(subscribtionHistory.getServiceReview().getImage());
            myReviewRes.setServiceReviewRegDate(new Date());//todo:필드추가필요.
            //아이템리뷰dto
            List<ItemReviewRes> itemReviewResList= new ArrayList<>();
            for(Purchase purchase:subscribtionHistory.getPurchases()){
                ItemReview itemReview =purchase.getItemReview();
                ItemReviewRes itemReviewRes = itemReview.toItemReviewRes();
                //엔티티 내에 getItem 구현.
                itemReviewRes.setItemName(getItem(itemReview.getItemSno()).getName());
                itemReviewResList.add(itemReviewRes);
            }
            myReviewRes.setItemReviewResList(itemReviewResList);
            myReviewList.add(myReviewRes);
        }
        return myReviewList;
    }

    //
    public Integer saveReview(ServiceReviewReq serviceReviewReq) {
        //getOne vs findById

//        Purchase purchase = purchaseRepository.findById(itemReviewReq.getPurchaseNo()).orElse(null);;
//        Users users = usersRepository.findById(itemReviewReq.getUserSno()).get();
//        Pet pet = petRepository.findById(itemReviewReq.getPetSno()).get();

        SubscribtionHistory subscribtionHistory= subscribtionHistoryRepository.findById(serviceReviewReq.getSubscriptionNo()).get();
        //serviceReview 저장
        ServiceReview serviceReview = ServiceReview.builder()
                .serviceReviewNo(subscribtionHistory.getServiceReview().getServiceReviewNo())
                .users(subscribtionHistory.getUsers())
                .rate(serviceReviewReq.getServiceReviewRate())
                .image(serviceReviewReq.getServiceReviewImage())
                .content(serviceReviewReq.getServiceReviewContent())
                .subscribtionHistory(subscribtionHistory)
                .build();
        serviceReviewRepository.save(serviceReview);

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
    public Item getItem(String itemSno){
        if(itemSno.startsWith("f")){
            return feedRepository.findById(itemSno).get();
        }else if (itemSno.startsWith("s")){
            return snackRepository.findById(itemSno).get();
        }else if (itemSno.startsWith("T")){
            return toyRepository.findById(itemSno).get();
        }
        return null;
    }




}
