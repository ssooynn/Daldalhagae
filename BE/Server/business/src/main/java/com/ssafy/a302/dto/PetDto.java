package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PetDto {
    private String userSno;
    private String name;
    private String birth;
    private String fat;
    private String materials;
    private String effects;
    private String target;
    private ArrayList<String> image = new ArrayList<>();

}
