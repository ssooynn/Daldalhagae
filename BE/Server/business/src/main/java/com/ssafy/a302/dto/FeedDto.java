package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeedDto {
    private String sno;
    private String name;
    private String particle;
    private String grade;
    private String image;
    private ArrayList<String> effects = new ArrayList<>();
    private ArrayList<String> targets = new ArrayList<>();
    private ArrayList<String> materials = new ArrayList<>();

}
