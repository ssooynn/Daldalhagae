package com.ssafy.a302.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
	private LocalDate birth;
	@Column(name = "FAT")
	private int fat;
	@Column(name = "IMAGE")
	private String image;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "USERS_SNO")
	private Users users;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "TARGET_NO")
	private Target target;
	
	@OneToMany(mappedBy = "pet", fetch = FetchType.LAZY)
	private List<ItemReview> itemReviews = new ArrayList<>();
	
	@OneToMany(mappedBy = "pet", fetch = FetchType.LAZY)
	private List<PetEffect> petEffects = new ArrayList<>();

	@OneToMany(mappedBy = "pet", fetch = FetchType.LAZY)
	private List<PetMaterial> petMaterials = new ArrayList<>();

	@OneToMany(mappedBy = "pet", fetch = FetchType.LAZY)
	private List<PurchasePlan> purchasePlans = new ArrayList<>();
	
	@OneToMany(mappedBy = "pet", fetch = FetchType.LAZY)
	private List<SubscribtionHistory> subscribtionHistorys = new ArrayList<>();

	public Pet(String petSno, String name, LocalDate birth, int fat, String image, Users users, Target target) {
		super();
		this.petSno = petSno;
		this.name = name;
		this.birth = birth;
		this.fat = fat;
		this.image = image;
		this.users = users;
		this.target = target;
	}
}
