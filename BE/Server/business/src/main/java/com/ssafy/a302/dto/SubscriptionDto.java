package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionDto {
    private String subscriptionName;
    private int price;
    private String petName;
    private String startDate;
    private String endDate;
    private int autoPaymentFlag;

}
