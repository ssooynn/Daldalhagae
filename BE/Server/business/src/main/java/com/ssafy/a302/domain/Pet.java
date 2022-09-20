package com.ssafy.a302.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Table(name = "PET")
public class Pet {
	@Id
	@Column(name = "PET_SNO")
    private String petSno;
	@Column(name = "NAME")
	private String name;
	@Column(name = "BIRTH")
	private Date birth;
	@Column(name = "FAT")
	private int fat;
	@Column(name = "IMAGE")
	private String image;
	
	@ManyToOne
	@JoinColumn(name = "USERS_SNO")
	private Users users;

	@ManyToOne
	@JoinColumn(name = "TARGET_NO")
	private Target target;
	
	@OneToMany(mappedBy = "pet")
	private List<ItemReview> itemReviews = new ArrayList<>();
	
	@OneToMany(mappedBy = "pet")
	private List<PetEffect> petEffects = new ArrayList<>();

	@OneToMany(mappedBy = "pet")
	private List<PetMaterial> petMaterials = new ArrayList<>();

	@OneToMany(mappedBy = "pet")
	private List<PurchasePlan> purchasePlans = new ArrayList<>();
	
	@OneToMany(mappedBy = "pet")
	private List<SubscribtionHistory> subscribtionHistorys = new ArrayList<>();
	
}
