package com.ssafy.a302.request;

import com.ssafy.a302.domain.QSubscribtionHistory;
import com.ssafy.a302.domain.SubscribtionHistory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionReq {
    private String userSno;
    private String petSno;
    private Date startDate;
    private Date endDate;
    private int autoPaymentFlag; // 0, 1
    private int subNo; // 구독종류 번호 (1~6/ 7)
    private String name;
    private String desc;
    private int price;
    private String image;
    private int[] typeNums; // 각각 몇개있는지
    private String[] itemsSno;
}
