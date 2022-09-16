package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDto {
    private String userSno;
    private String petSno;
    private String itemSno;
    private String rate;
    private String content;
    private ArrayList<String> images = new ArrayList<>();

}
