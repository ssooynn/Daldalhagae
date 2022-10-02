insert into TOY values ('t0hfieToEaO96HP99xqxc', '딩독 까먹는 삑삑 고구마 1p 강아지 노즈워크 장난감', 'https://shopping-phinf.pstatic.net/main_8420486/84204860450.jpg?type=f140',null,null);
insert into USERS(USERS_SNO, KAKAO_ID, NAME, PHONE, ADDRESS) values
('uXJFRDEC7DuyYasedNxU1','kakao1','강일구','010-5831-4561','주소'),
('uXJFRDEC7DuyYasedNxU2','kakao2','이현석','010-0457-1211','주소'),
('uXJFRDEC7DuyYasedNxU3','kakao3','김민규','010-1405-3151','주소'),
('uXJFRDEC7DuyYasedNxU4','kakao4','신길현','010-6414-4581','주소'),
('uXJFRDEC7DuyYasedNxU5','kakao5','조세호','010-4320-7461','주소');

insert into USERS_LOG(USERS_SNO, USERS_CREATED_AT) values
('uXJFRDEC7DuyYasedNxU1', '2022-07-15');

insert into PET(PET_SNO, USERS_SNO, TARGET_NO, NAME, BIRTH, FAT) values
('pw6SETG7OzWutQZRGHSF1','uXJFRDEC7DuyYasedNxU1',1,'초코','2020-04-05','1'),
('pw6SETG7OzWutQZRGHSF2','uXJFRDEC7DuyYasedNxU2',2,'마리','2020-04-05','2'),
('pw6SETG7OzWutQZRGHSF3','uXJFRDEC7DuyYasedNxU3',3,'초코','2020-04-05','3'),
('pw6SETG7OzWutQZRGHSF4','uXJFRDEC7DuyYasedNxU4',4,'초코','2020-04-05','4'),
('pw6SETG7OzWutQZRGHSF5','uXJFRDEC7DuyYasedNxU5',5,'초코','2020-04-05','5');
-- ---------------------------------------------------------------------------------------------
insert into SUBSCRIBTION_HISTORY(PET_SNO, USERS_SNO, START_DATE, END_DATE, AUTO_PAYMENT_FLAG) values
('pfIXrHnfzcKy7zGF1Ha9T', 'udZ0a32z4Ur2LvGlmEXsNSUBSCRIBTION_HISTORY', '2022-07-20', '2022-08-19', 1),
('pfIXrHnfzcKy7zGF1Ha9T', 'udZ0a32z4Ur2LvGlmEXsN', '2022-08-20', '2022-09-19', 1),
('pfIXrHnfzcKy7zGF1Ha9T', 'udZ0a32z4Ur2LvGlmEXsN', '2022-09-20', '2022-10-19', 1),
('pfIXrHnfzcKy7zGF1Ha9T', 'udZ0a32z4Ur2LvGlmEXsN', '2022-09-20', '2022-10-19', 2),
('pfIXrHnfzcKy7zGF1Ha9T', 'udZ0a32z4Ur2LvGlmEXsN', '2022-09-20', '2022-10-19', 0);

insert into PRODUCT_TYPE(PRODUCT_TYPE_NO,NAME) values
(1,'feed'),(2,'snack'),(3,'toy');

insert into SUBSCRIBTION_PRODUCT_TYPE(PRODUCT_TYPE_NO, SUBSCRIBTION_NO) values
(1,0),

(2,1),
(2,1),
(2,1),
(2,2),
(2,2),

(3,0),
(3,1),
(3,1),
(3,1),
(3,2),
(3,2),

(4,0),
(4,1),
(4,1),
(4,1),

(5,0),
(5,2),
(5,2),

(6,0),
(6,1),
(6,2);

insert into SUBSCRIBTION_HISTORY_SUBSCRIBTION(SUBSCRIBTION_HISTORY_NO, SUBSCRIBTION_NO) values
(244,1),
(245,1),
(246,1),
(247,3),
(248,2);

insert into PURCHASE(SUBSCRIBTION_HISTORY_NO, ITEM_SNO) values
(244,'f05C8ZXZjHZrZaeUB8eYN'),

(245,'f05C8ZXZjHZrZaeUB8eYN'),

(246,'f05C8ZXZjHZrZaeUB8eYN'),

(247,'f05C8ZXZjHZrZaeUB8eYN'),
(247,'s0hfieToEaO96HP99xqxc'),
(247,'s0hfieToEaO96HP99xqxc'),
(247,'s0hfieToEaO96HP99xqxc'),
(247,'t0hfieToEaO96HP99xqxc'),

(248,'s0hfieToEaO96HP99xqxc'),
(248,'s0hfieToEaO96HP99xqxc'),
(248,'s0hfieToEaO96HP99xqxc'),
(248,'t0hfieToEaO96HP99xqxc'),
(248,'t0hfieToEaO96HP99xqxc');


insert into SERVICE_REVIEW(USERS_SNO, SUBSCRIBTION_HISTORY_NO, RATE, REG_DATE) values
('udZ0a32z4Ur2LvGlmEXsN', 13,5,'2022-08-15');


insert into ITEM_REVIEW(USERS_SNO, PET_SNO, PURCHASE_NO, ITEM_SNO, RATE, CREATED_AT) values
('udZ0a32z4Ur2LvGlmEXsN', 'pfIXrHnfzcKy7zGF1Ha9T', 1,'f05C8ZXZjHZrZaeUB8eYN', 5, '2022-08-15');

insert into PURCHASE_PLAN(PET_SNO, USERS_SNO, ITEM_SNO) values
('pfIXrHnfzcKy7zGF1Ha9T', 'udZ0a32z4Ur2LvGlmEXsN', 'f05C8ZXZjHZrZaeUB8eYN');


select * from SUBSCRIBTION_HISTORY where PET_SNO = 'pfIXrHnfzcKy7zGF1Ha9T';
select * from PURCHASE where SUBSCRIBTION_HISTORY_NO = 13;
select * from ITEM_REVIEW;

select * from PET where USERS_SNO = 'u6bszQdUpHgSwAYoIxTSj';
select * from SUBSCRIBTION_HISTORY where USERS_SNO = 'u6bszQdUpHgSwAYoIxTSj';
select * from PURCHASE where SUBSCRIBTION_HISTORY_NO=249;



select * from PURCHASE;
select * from USERS;
select * from MATERIAL;
select * from FEED;
select * from SNACK;
select * from TOY;
select * from USERS_LOG;
select * from PET;
select * from SUBSCRIBTION;
select * from SUBSCRIBTION_HISTORY;
select * from SUBSCRIBTION_HISTORY_SUBSCRIBTION;
select * from PRODUCT_TYPE;
select * from SUBSCRIBTION_PRODUCT_TYPE;
select * from EFFECT;
select * from PET_EFFECT;
select * from SUBSCRIBTION;
select * from PRODUCT_TYPE;