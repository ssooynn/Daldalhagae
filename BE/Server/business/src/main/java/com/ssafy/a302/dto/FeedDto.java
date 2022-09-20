package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.ssafy.a302.domain.FeedEffect;
import com.ssafy.a302.domain.FeedMaterial;
import com.ssafy.a302.domain.FeedTarget;
import com.ssafy.a302.domain.Grade;
import com.ssafy.a302.domain.Particle;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeedDto {
	private String feedSno;
	private String name;
	private String image;
	private GradeDto grade;
	private ParticleDto particle;
}
