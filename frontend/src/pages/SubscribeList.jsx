import React from 'react'

import imgA from '../assets/img/우리의한달을꽉차게.png'
import imgB from '../assets/img/구독리스트1.png'
import imgC from '../assets/img/구독리스트2.png'
import imgD from '../assets/img/구독리스트3.png'

const SubscribeList = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '8rem 0 0 0',
      }}>
      <div style={{ width: '70%' }}>
        <div> {/* 우리의 한달을 꽉 차게 */}
          <img
            src={imgA}
            style={{
              width: '100%',
              filter: 'brightness(40%)',
              position: 'relative',
              marginBottom: '10rem'
            }}alt="" />
          <div
            style={{
              color: 'white',
              position: 'absolute',
              top: '50%',
              left: '30%',
              transform: 'translate( -50%, -50% )',
              textAlign: 'start',
            }}>
            <h1>우리의 한달을 꽉 차게</h1>
            <h3>반려견을 위한 1달 구독 서비스</h3>
          </div>
        </div>
        <div  // Basic Package
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <img
            src={imgB}
            style={{
              width: '50%',
              height: '36.5%'
            }} alt="" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '0 0 10rem 15px',
            }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'end',
                marginBottom: '1rem'
              }}>
              <h2 style={{margin: '0 0 20px 0'}}>Basic Package</h2>
              <p style={{margin: '0'}}>든든한 한달을 위한 기본 구성,</p>
              <p style={{margin: '0'}}>기본에 충실하고 싶은 분에게 추천합니다.</p>
            </div>
            <div
              style={{
                backgroundColor: 'rgba(172, 153, 138, 0.2)',
                borderRadius: '5px',
                padding: '0 30px 0 30px',
                fontSize: '12px'
              }}>
              <p style={{fontWeight: 'bold', fontSize: '14px'}}>[사료 1개월 구성]</p>
              <p>고르기 힘든 반려견 사료, 이제 고민하지 마세요.</p>
              <p>'달달하개'가 기본에 충실한 사료 1개월 구성으로 반려인의 고민을 덜어드립니다.</p>
              <p>'홀리스틱' 등급만으로 구성된 반려견 사료 중 최적의 상품을 맞춤 추천해 보내드립니다.</p>
              <p style={{textAlign: 'end', cursor: 'pointer'}}>상세설명 보러가기 →</p>
            </div>
          </div>
        </div>
        <div  // Play Package
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '0 15px 10rem 0',
            }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'start',
                marginBottom: '1rem'
              }}>
              <h2 style={{margin: '0 0 20px 0'}}>Play Package</h2>
              <p style={{margin: '0'}}>활발한 우리 반려견 놀이 생활을 위한 구성,</p>
              <p style={{margin: '0'}}>항상 발랄하고 활동적인 반려견에게 추천합니다.</p>
            </div>
            <div
              style={{
                backgroundColor: 'rgba(235, 203, 177, 0.2)',
                borderRadius: '5px',
                padding: '0 30px 0 30px',
                fontSize: '12px'
              }}>
              <p style={{fontWeight: 'bold', fontSize: '14px'}}>[간식 3종 + 장난감 2종 구성]</p>
              <p>항상 힘이 넘치는 우리 반려견, 어떻게 놀아줄까 고민이신가요?</p>
              <p>'달달하개'가 제안하는 Play Package를 통해 맛있고 즐거운 놀이 시간을 보내세요!</p>
              <p>다양한 간식 3종과 질리지 않는 장난감 2종 구성으로 달달하고 알찬 반려견 여가생활을 보장합니다.</p>
              <p style={{textAlign: 'end', cursor: 'pointer'}}>상세설명 보러가기 →</p>
            </div>
          </div>
          <img
            src={imgC}
            style={{
              width: '50%',
              height: '36.5%'
            }} alt="" />
        </div>
        <div  // All In One Package
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <img
            src={imgD}
            style={{
              width: '50%',
              height: '36.5%'
            }} alt="" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '0 0 10rem 15px',
            }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'end',
                marginBottom: '1rem'
              }}>
              <h2 style={{margin: '0 0 20px 0'}}>All In One Package</h2>
              <p style={{margin: '0'}}>사료, 간식, 장난감 꽉 찬 구성</p>
              <p style={{margin: '0'}}>반려견에게 가득찬 한달을 선물하세요</p>
            </div>
            <div
              style={{
                backgroundColor: '#EDDCCF',
                borderRadius: '5px',
                padding: '0 30px 0 30px',
                fontSize: '12px'
              }}>
              <p style={{fontWeight: 'bold', fontSize: '14px'}}>[사료 1개월 + 간식 3종 + 장난감 2종 구성]</p>
              <p>뭘 고를지 고민일땐? 다 사면되지!</p>
              <p>'달달하개'가 사료, 간식, 장난감 전부 책임지겠습니다.</p>
              <p>고민 없이 꽉 찬 한 달을 반려견과 함께 즐기세요. 한 달간 달달하개.</p>
              <p style={{textAlign: 'end', cursor: 'pointer'}}>상세설명 보러가기 →</p>
            </div>
          </div>
        </div>
      </div>
      <div  // Other Package
        style={{
          textAlign: 'center',
          width: '70%'
        }}>
        <h3>Other Options</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <div>
            <img
              src={imgB}
              style={{width: '100%'}}alt="" />
              <h4>DalDal Package</h4>
              <p>[사료 1개월 + 간식 3종]</p>
          </div>
          <div>
            <img
              src={imgB}
              style={{width: '100%'}}alt="" />
              <h4>Toy Package</h4>
              <p>[사료 1개월 + 장난감 2종]</p>
          </div>
          <div>
            <img
              src={imgB}
              style={{width: '100%'}}alt="" />
              <h4>Light All Package</h4>
              <p>[사료 1개월 + 간식 1종 + 장난감 1종]</p>
          </div>
        </div>
      </div>
      <div  // Custom
        style={{
          margin: '10rem 0 20rem 0',
          textAlign: 'center'
        }}>
        <h2>원하는 구성이 없다면?</h2>
        <p>.</p>
        <p>.</p>
        <p>달달하개에서는 원하는 구성으로 나만의 구독 패키지를 만들 수 있습니다!</p>
        <p>지금 바로 아래 버튼을 클릭해 시작해보세요</p>
        <div
          style={{
            backgroundColor: '#776B62',
            color: 'white',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            height: '50px',
            margin: '2rem 0 2rem 0',
            cursor: 'pointer',
          }}>
          <p style={{  // 카카오페이 api연결
          }}>나만의 구독 패키지 만들기</p>  
        </div>
      </div>
    </div>
  )
}

export default SubscribeList