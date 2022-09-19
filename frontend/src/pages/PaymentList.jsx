import React from 'react'

import imgA from '../assets/img/추천페이지1.png'

const PaymentList = () => {
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
        <hr style={{backgroundColor: '#CCAA90'}}/>
        <div  // 토글
          style={{
            width: '100%',
            position: 'relative',
            marginTop: '30px'
          }}>
          <img
            src={imgA}
            alt="img"
            style={{
              width: '100%',
              verticalAlign: 'middle',
              borderRadius: '5px 5px 0 0'
            }}/>
          <div
            style={{
              display: 'flex'
            }}>
            <h4
              style={{
                position: 'absolute',
                top: '-10%',
                left: '10%',
                transform: 'translate(0%, 0%)'
              }}>package name - pet name</h4>
            <p
              style={{
                position: 'absolute',
                top: '0%',
                right: '10%',
                transform: 'translate(0%, 0%)'
              }}>월 21,900원</p>
          </div>
          <p
            style={{
              position: 'absolute',
              top: '40%',
              left: '10%',
              transform: 'translate(0%, 0%)',
              fontSize: '13px'
            }}>(사료1 + 간식2 + 장난감3)</p>
        </div>
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
            <hr style={{backgroundColor: '#F3CEB2', height: '0.1px'}}/>
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
        <div  // 결제 금액
          style={{
            display: 'flex',
            flexDirection: 'row-reverse'
          }}>
          <h3>월 61,300원</h3>
          <h3 style={{ width: '30%'}}>결제 금액 합계</h3>
        </div>
        <h3
          style={{
            marginBottom: '0',
          }}>구독 목록</h3>
        <hr style={{backgroundColor: '#CCAA90'}}/>
        <table>
          <tr>
            <td width="200px">시작일</td>
            <td>2022.09.19</td>
          </tr>
          <tr>
            <td>이름</td>
            <td>이이이</td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>010-1234-5678</td>
          </tr>
        </table>
        <h3
          style={{
            marginBottom: '0',
          }}>배송 정보</h3>
        <hr style={{backgroundColor: '#CCAA90'}}/>
        <table>
          <tr>
            <td width="200px">배송지</td>
            <td>2022.09.19</td>
          </tr>
          <tr>
            <td>이름</td>
            <td>이이이</td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>010-1234-5678</td>
          </tr>
        </table>
        <div style={{ fontSize: '8px', marginTop: '30px'}}>
          <p style={{margin: 'auto'}}>구매조건 확인 및 결제대행 서비스 약관 동의보기</p>
          <p style={{margin: 'auto'}}>개인정보 제3자 제공 동의보기</p>
          <p style={{margin: 'auto'}}>* 개별 판매자가 등록한 마켓플레이스(오픈마켓) 상품에 대한 광고, 상품주문, 배송 및 환불의 의무와 책임은 각 판매자가 부담하고, 이에 대하여 쿠팡은 통신판매중개자로서 통신판매의 당사자가 아니므로 일체 책임을 지지 않습니다.</p>
          <p>위 주문 내용을 확인 하였으며, 회원 본인은 개인정보 이용 및 제공(해외직구의 경우 국외제공) 및 결제에 동의합니다.</p>
        </div>
        <div  // 버튼
          style={{
          display: 'flex',
          justifyContent: 'center'
          }}>
          <div
            style={{
              backgroundColor: '#CCAA90',
              width: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              height: '50px',
              margin: '2rem 0 2rem 0',
              cursor: 'pointer',
            }}>
            <h3 style={{  // 카카오페이 api연결
            }}>결제하기</h3>  
          </div>
        </div>
        <form action="http://localhost:3000/kakaoPay" method='get'>
          <input type="submit" value="카카오결제"/>
        </form>
      </div>
    </div>
  )
}

export default PaymentList