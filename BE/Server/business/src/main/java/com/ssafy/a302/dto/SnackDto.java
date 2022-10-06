package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SnackDto {
    private String sno;
    private String name;
    private String image;
    private String particle;
    private String grade;

}
