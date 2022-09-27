package com.ssafy.a302.response;

import com.ssafy.a302.domain.Purchase;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class UnratedSubscriptionRes {
    //    [{
//        subscriptionNo: 구독번호(int),
//        subscriptionName: 구독종류(String),
//                subscriptionStartDate: 구독시작일
//        subscriptionEndDate :구독종료일
//        petSno: 구독pet(String)
//        petName: pet이름(String),
//                purchaseList: 구매목록
//                [(
//                itemSno : 아이템번호(String)
//        itemName :상품이름(String)
//        itemImg :상품이미지(String)
//        purchaseNo :구매번호(int)
//    }]
//}]
    int subscriptionNo;
    String subscriptionName;
    Date subscriptionStartDate;
    Date subscriptionEndDate;
    String petSno;
    String petName;
    List<PurchaseRes> purchaseResList;

}
