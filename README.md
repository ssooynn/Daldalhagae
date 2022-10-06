# ReadMe

![그림6](README.assets/그림6.png)



## 💡 서비스 소개

**반려견 용품 맞춤추천, 정기구독 서비스**

> 달달하개는 각각의 반려견의 건강상태 및 취향을 고려하여<br>매달 반려견 용품을 추천, 제공하는 반려견 용품 구독 서비스입니다.
> *구독서비스: 일정 금액을 정기적으로 지불하면 각종 상품/서비스를 일정 기간마다 제공하는 서비스

**달마다 우리의 달달한 한달을 위해, 달달하개**

## 🛠️ 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=white"> 
  <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">  
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
  <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> 
  <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> 
  <img src="https://img.shields.io/badge/springSecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white"> 
  <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi">  
  <img src="https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white"> 
  <br>

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <br>

  <img src="https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/notion-CA4245?style=for-the-badge&logo=notion&logoColor=white"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"><img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"><img src="https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white"><img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"> 

<br>
</div>

## 🗃️ 프로젝트 구조

### 🏗️ 서비스 구조

![Untitled](README.assets/Untitled.png)

![sss](README.assets/sss.png)

![sd](README.assets/sd.png)



### 📂 파일 구조

**Front-End**

![그림1](README.assets/그림1.png)

**Back-End**

![그림5](../그림5.png)



## 🔗****Database Modeling****

![그림2.pngㄴㅇㄻ](README.assets/그림2.pngㄴㅇㄻ.png)



## 🎉****추천 알고리즘****

![image-20221006235921925](README.assets/image-20221006235921925.png)

### 콘텐츠 기반 필터링

#### **TF-IDF**

- 단어의 빈도와 그 단어가 얼마나 데이터의 특징을 잘 나타내는지를 기준으로 유사한 제품 추천

- 크롤링한 상품 리뷰에서 빈번하게 나타나는 단어를 기반으로 유사도 측정

- 동사나 형용사 부사 등 의미가 없는 단어들은 자연어 처리를 통해 사용하지 않음

![image-20221007000118225](README.assets/image-20221007000118225.png)



### 협업필터링

#### KNN

- 사용자의 데이터를 좌표로 나타내어 유클리드 거리에 의해 가까운 사용자 그룹화
- 그룹 내의 나와 비슷한 사용자가 만족한 제품을 추천
- 각 제품에 대한 만족도가 축이되어 유사도 거리 측정 척도로 사용됨

![image-20221007000503161](README.assets/image-20221007000503161.png)



#### SVD

- 나와 비슷한 사용자들의 평점 데이터를 바탕으로 나의 평점을 예측하는 방법
- 예측한 평점이 높은 상품 추천

![image-20221007000752304](README.assets/image-20221007000752304.png)





## 💻 주요 기능 및 데모 영상

### **메인페이지**

- 서비스 소개 페이지
-  react-spring을 이용한 애니메이션 효과(첫페이지, 6페이지 숫자)
- 시각적 효과를 위한 세로캐러셀 (버튼 동작)



![녹화202210070001](README.assets/녹화202210070001.gif)



### 회원가입 및 로그인

- 카카오 로그인
- 회원 가입 시 사용자 정보와 펫 등록
- 펫 3마리까지 등록 가능, 1마리 필수 등록

![202210070012](README.assets/202210070012.gif)



### 챗봇

- 사이드바 챗봇 버튼 클릭 시 오픈
- 서비스 소개, 추천 알고리즘, 구독 종류 등 서비스 전반에 대한 안내 가능
- 버튼 클릭 혹은 특정 키워드 포함 질문 시 응대 가능
- 응대 불가 질문에는 상담 채널 안내

![202210070002](README.assets/202210070002.gif)



### 구독 리스트 및 상세 정보

- 각 패키지 리스트 조회 가능
- 원하는 조합의 패키지가 존재하지 않을 때 자유 조합(나만의 패키지) 만들기 가능
- 구독 상세 페이지에서 추천 받을 수 있는 상품 Auto Carousel로 조회 가능

![202210070010](README.assets/202210070010.gif)





### 장바구니

- 원하는 상품을 장바구니에 담고 남은 쇼핑 가능
- Redux를 사용해 담은 상품 및 대상 반려견 정보를 중앙관리

![202210070014](README.assets/202210070014.gif)



### 구독 결제

- 6종의 구독 패키지와 나만의 패키지 만들기 중 선택가능
- 구독 상세에 들어가 대상 강아지 선택 후 바로 구독 혹은 장바구니에 담기 가능
- 추천 리스트를 보거나 추천 리스트에서 자동 추천 받아 바로 결제하기로 넘어가기 가능

![202210070003](README.assets/202210070003.gif)



### 고객 리뷰

- 모든 서비스 리뷰 조회 가능

- 페이지네이션 구현

![녹화202210070008](README.assets/녹화202210070008.gif)



### 마이페이지

##### 사용자 정보 관리

- 사용자 정보: 이름, 전화번호, 이메일, 전체주소, 상세주소, 우편번호
- 사용자 정보 조회 가능
- 사용자정보 수정 가능 (도로명 주소 우편번호 검색)

![녹화202210070005](README.assets/녹화202210070005.gif)



##### 반려견 정보 관리

- 반려견 정보: 이름, 생일, 알러지, 비만도, 선호 사료 기능
- 반려견 정보 조회 가능
- 반려견 정보 수정 가능

![녹화202210070006](README.assets/녹화202210070006.gif)



##### 펫 추가

- 펫 3마리 미만 등록 시 추가 등록 가능

![202210070013](README.assets/202210070013.gif)



##### 구독정보

- 현재 구독중인, 진행했던 구독 리스트 확인가능
- 구독 상세 정보 확인가능
- 현재 구독중인 상품의 경후 구독 취소(다음 달부터 구독을 진행하지 않음) 가능



##### 리뷰

- 후기 미작성 구독 리스트에서 리뷰 작성 가능 (리뷰 작성 모달)
- 작성 후기 확인 가능

![202210070015](README.assets/202210070015.gif)



##### 회원 탈퇴

- 회원 탈퇴 가능

![202210070011](README.assets/202210070011.gif)



## 🎇 기대 효과

##### 1. 간편하게

많은 선택지 중 추천을 통해 선택지는 줄이고 만족도는 높이면서 간편하게 만족스러운 반려견 용품 구입이 가능합니다.

##### 2. 빠르게

기존 인터넷 쇼핑이나 오프라인 쇼핑에서 너무 많은 선택지, 혹은 정보 부족으로 오랜 기간 고민하던 것과 달리 맞춤 추천을 통해 고민의 시간을 줄이고 빠른 쇼핑이 가능합니다.

##### 3. 행복한 반려견

아낀 시간과 기회비용은 우리 반려견을 위해서 사용하여 반려견을 더 행복하게 만들어 줄 수 있습니다



## 🗣️ 협업 관리

**Jira BurnDown Chart**

![image-20221007012151553](README.assets/image-20221007012151553.png)

-----

**Notion**

![image-20221007012221742](README.assets/image-20221007012221742.png)

![image-20221007012320472](README.assets/image-20221007012320472.png)





## 👩‍👩‍👧 개발 멤버 소개

![image-20221007012406439](README.assets/image-20221007012406439.png)



## 📅 프로젝트 기간

### 22.08.22 ~ 22.10.07

- **기획 및 설계** : 22.08.22 ~ 22.09.18
- **프로젝트 구현** : 22.09.19 ~ 22.10.02
- **버그 수정 및 산출물 정리** : 22.10.03 ~ 22.10.07
