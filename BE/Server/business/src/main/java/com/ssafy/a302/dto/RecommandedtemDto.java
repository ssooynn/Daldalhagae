package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecommandedtemDto {
    private ArrayList<FeedDto> feeds = new ArrayList<>();
    private ArrayList<SnackDto> snacks = new ArrayList<>();
    private ArrayList<ToyDto> toys = new ArrayList<>();
}
