package com.ssafy.a302.response;

import com.ssafy.a302.domain.ServiceReview;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ServiceReviewRes {
    private String userSno;
    private String subName;
    private int rate;
    private String content;
    private String image;
    private LocalDate date;

    public ServiceReviewRes(ServiceReview serviceReview, String imagePath){
        this.userSno = serviceReview.getUsers().getUsersSno();
        this.subName = serviceReview.getSubscribtionHistory().getSubscribtionHistorySubscribtion().getSubscribtion().getName();
        this.content = serviceReview.getContent();
        if(serviceReview.getImage() != null)  {
            this.image = imagePath + serviceReview.getImage();
        }
        this.date = serviceReview.getRegDate();
    }
}
