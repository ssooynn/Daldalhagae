import React,{ useState, useEffect } from 'react';
import styled from 'styled-components'
import { StyledButton } from '../components/CommonComponent';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

import PackageImage1 from '../assets/img/추천페이지1.png'
import PackageImage2 from '../assets/img/toggle_play.png'
import PackageImage3 from '../assets/img/toggle_all.png'
import daldalPackage from '../assets/img/toggle_daldal.png'
import toyPackage from '../assets/img/toggle_toy.png'
import lightPackage from '../assets/img/toggle_light.png'
import 자유구독 from '../assets/img/toggle_custom.png'


const PackageBox  = styled.div`
background-image: ${(props) => {
  let iamge;
  switch (props.packageName) {
    case 'Basic Package':
      iamge = `url(${PackageImage1})`;
      break;
    case 'Play Package':
      iamge = `url(${PackageImage2})`;
      break;
    case 'All In One Package':
      iamge = `url(${PackageImage3})`;
      break;
    case 'DalDal Package':
      iamge = `url(${daldalPackage})`;
      break;
    case 'Toy Package':
      iamge = `url(${toyPackage})`;
      break;
    case 'Light All Package':
      iamge = `url(${lightPackage})`;
      break;
    default:
      iamge = `url(${자유구독})`;
      break;
  }
  return iamge
}};
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3rem;
border-radius: 10px 10px 0 0;
`

const PaymentList = () => {
  const location = useLocation()
  const infos = location.state  // name, intro, components1, price, components2, pets, pet
  
  let totalPrice = infos.map((info)=>{return Number(info[3])}).reduce((a, b)=>a+b, 0)

  const REDIRECT_URL = "http://localhost:3000/paymentCheck";

  function Purchase() {
    const { IMP } = window;
    IMP.init("imp10157701");
    const data = {
      pg: "kakaopay",
      merchant_uid: "_order_no_7", // 상점에서 관리하는 주문 번호
      name: "주문명: " + "나만의 구독 서비스",
      amount: 21900,
      customer_uid: "TCSUBSCRIP",
      buyer_email: "dldkgus98@naver.com",
      buyer_name: "이아현",
      buyer_tel: "010-2872-1882",
      buyer_addr: "경기도 남양주시 진접읍 금강로 1553-26 106동 1305호",
      buyer_postcode: "",
      m_redirect_url: REDIRECT_URL,
    };
    IMP.request_pay(data, callback);
  }

  function callback(response) {
    console.log(response);
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = response;
    if (success) {
      //결제 성공
      alert("결제 성공");
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };

  const today = new Date()
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  
  return (
    <div
      style={{
        paddingTop: '7rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <div
        style={{
          width: '70%',
        }}>
        <div  // 페이지 제목
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <h3
            style={{
              marginBottom: '0',
            }}>결제 목록</h3>
        </div>
        <hr style={{ backgroundColor: '#CCAA90' }} />
        {infos.map((info, idx)=>{
          return <div>
          <PackageBox>
            <div
              style={{
                width: '80%',
              }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <h2>{info[0]} - {info[6]}</h2>
                <p>월 {info[3]}원</p>
              </div>
              <p>{info[1]}</p>
            </div>
          </PackageBox>
          <div  // 결제 목록
            style={{
              backgroundColor: '#FFFDFB',
              height: '100%',
              borderRadius: '0 0 5px 5px',
              boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)',
              padding: '10px 0 20px 0',
              position: 'relative',
            }}>
            <div
              style={{
                margin: '0 20px 0 20px',
                paddingTop: '20px'
              }}>
              <div  // 표 제목
                style={{
                  display: 'flex',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>
                <p
                  style={{
                    width: '30%',
                    margin: 'auto'
                  }}>분류</p>
                <p
                  style={{
                    width: '40%',
                    margin: 'auto'
                  }}>제품명</p>
                <p
                  style={{
                    width: '30%',
                    margin: 'auto'
                  }}>주 원료 / 소재</p>
              </div>
              <hr style={{ backgroundColor: '#F3CEB2', height: '0.1px' }} />
              <div  // 본문
                style={{
                  display: 'flex',
                  textAlign: 'center'
                }}>
                <p
                  style={{
                    width: '30%',
                  }}>사료</p>
                <p
                  style={{
                    width: '40%'
                  }}>로얄캐닌 인도어 10kg</p>
                <p
                  style={{
                    width: '30%'
                  }}>닭, 오리, 연어</p>
              </div>
            </div>
          </div>
          </ div>
        })}
        <div  // 결제 금액
          style={{
            display: 'flex',
            flexDirection: 'row-reverse'
          }}>
          <h3>월 {totalPrice}원</h3>
          <h3 style={{ width: '30%' }}>결제 금액 합계</h3>
        </div>
        <div // 구독 정보
         style={{margin: '3rem auto'}}>
          <h3 style={{ marginBottom: '0' }}>구독 목록</h3>
          <hr style={{ backgroundColor: '#CCAA90' }} />
          <table>
            <tr>
              <td width="200px">시작일</td>
              <td>{year}년 {month}월 {date}일</td>
            </tr>
            <tr>
              <td>이름</td>
              <td>손흥민</td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>010-7777-7777</td>
            </tr>
          </table>
        </div>
        <div> {/* 사용자 정보 */}
          <h3
            style={{
              marginBottom: '0',
            }}>배송 정보</h3>
          <hr style={{ backgroundColor: '#CCAA90' }} />
          <table>
            <tr>
              <td width="200px">배송지</td>
              <td>강원도 춘천시 xx면 xx읍 xx리</td>
            </tr>
            <tr>
              <td>이름</td>
              <td>손흥민</td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>010-7777-7777</td>
            </tr>
          </table>
          <div style={{ fontSize: '8px', marginTop: '30px' }}>
            <p style={{ margin: 'auto' }}>구매조건 확인 및 결제대행 서비스 약관 동의보기</p>
            <p style={{ margin: 'auto' }}>개인정보 제3자 제공 동의보기</p>
            <p style={{ margin: 'auto' }}>* 개별 판매자가 등록한 마켓플레이스(오픈마켓) 상품에 대한 광고, 상품주문, 배송 및 환불의 의무와 책임은 각 판매자가 부담하고, 이에 대하여 쿠팡은 통신판매중개자로서 통신판매의 당사자가 아니므로 일체 책임을 지지 않습니다.</p>
            <p>위 주문 내용을 확인 하였으며, 회원 본인은 개인정보 이용 및 제공(해외직구의 경우 국외제공) 및 결제에 동의합니다.</p>
          </div>
        </div>
      </div>
      <StyledButton onClick={Purchase} SmallWhite style={{width: '250px', margin: '100px 0 100px 0', fontWeight: '700'}}>결제하기</StyledButton>
      <Footer />
    </div>
  )
}

export default PaymentList