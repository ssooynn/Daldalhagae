package com.ssafy.a302.response;

import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;


@Data
public class SnackTemp {
    private String item_sno;
    private List<Integer> materials =new ArrayList<>();
    private List<Integer> effects = new ArrayList<>();
    private List<Integer> targets =new ArrayList<>();

    @Builder
    public SnackTemp(String item_sno, List<Integer> materials, List<Integer> effects, List<Integer> targets) {
        this.item_sno = item_sno;
        this.materials = materials;
        this.effects = effects;
        this.targets = targets;
    }
}