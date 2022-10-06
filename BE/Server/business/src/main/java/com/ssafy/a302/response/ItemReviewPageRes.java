package com.ssafy.a302.response;

import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.domain.Page;

import java.util.List;

@Data
@NoArgsConstructor
public class ItemReviewPageRes {
    private List<ItemReviewRes> reviewList;
    private int pageSize; //한 페이지 원소 수
    private int pageNumber; //페이지 번호
    private int totalPages;
    private long totalElements;

    private boolean empty;
    private boolean first;
    private boolean last;


    public ItemReviewPageRes(Page<?> page){
        this.totalPages=page.getTotalPages();
        this.totalElements=page.getTotalElements();
        this.pageNumber = page.getNumber();
        this.pageSize=page.getSize();
        this.empty=page.isEmpty();
        this.first=page.isFirst();
        this.last=page.isLast();
    }
}
