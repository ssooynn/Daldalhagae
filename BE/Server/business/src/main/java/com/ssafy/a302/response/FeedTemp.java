package com.ssafy.a302.response;

import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class FeedTemp {
    private String item_sno;
    private int grade;
    private int particle;
    private List<Integer> materials =new ArrayList<>();
    private List<Integer> effects = new ArrayList<>();
    private List<Integer> targets =new ArrayList<>();

    @Builder
    public FeedTemp(String item_sno, int grade, int particle, List<Integer> materials, List<Integer> effects, List<Integer> targets) {
        this.item_sno = item_sno;
        this.grade = grade;
        this.particle = particle;
        this.materials = materials;
        this.effects = effects;
        this.targets = targets;
    }

}
