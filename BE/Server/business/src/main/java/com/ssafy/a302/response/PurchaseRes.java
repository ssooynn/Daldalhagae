package com.ssafy.a302.response;

import lombok.Data;

import java.util.Date;

@Data
public class PurchaseRes {
    private int purchaseNo;
    private String itemSno;
    private Date refundDate;
    private String itemName;
    private String itemImg;
}
