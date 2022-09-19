import React, {useEffect} from 'react'

import imgD from '../assets/img/구독상세페이지4.png'

function MoreReview(props) {
  function closeReview() { // 모달 끄기
    props.setReviewOpen(false)
  }
  useEffect(() => {  // 배경화면 스크롤 움직임 막기
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = ''
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
  }, [])
  return (
    <div
      onClick={closeReview}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <div
        onClick={(e)=>e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          width: '800px',
          padding: '2rem 0 1rem 0',
          zIndex: '1',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
        <div
          style={{
            margin: '0 6rem 0 6rem'
          }}>
          <p
            onClick={closeReview}
            style={{
              cursor: 'pointer',
              position: 'absolute',
              right: '30px',
              top: '0',
            }}>✖</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            <div>
              <img src={imgD} width='200px' height='150px' alt="img" />
              <p>제품명</p>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '300px',
                  fontSize: '10px'
                }}>
                <p>주원료</p>
                <p>닭, 오리, 연어</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '300px',
                  fontSize: '10px'
                }}>
                <p>급여 대상</p>
                <p>퍼피, 어덜트, 시니어, 임신 / 수유, 대형견</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '300px',
                  fontSize: '10px'
                }}>
                <p>입자크기</p>
                <p>보통 8 ~ 13 mm</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '300px',
                  fontSize: '10px'
                }}>
                <p>기능</p>
                <p>영양공급, 저알러지, 식욕증진</p>
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: '13px'
            }}>
            <p style={{textAlign: 'end'}}>리뷰목록</p>
          </div>
          <hr />
          <div
            style={{
              backgroundColor: '#F6F1EC',
              borderRadius: '5px',
              boxShadow: '1px 2px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              justifyContent: 'space-around',
              margin: '3px 0 10px 0',
              textAlign: 'start',
              padding: '0 2rem 0 2rem'
            }}>
              <div style={{ marginRight: '2rem'}}>
                <p style={{ fontWeight: 'bold'}}>작성자이름</p>
                <p>☆☆☆☆☆</p>
              </div>
              <div style={{ marginRight: '2rem'}}>
                <p>딱 필요한 구성으로 고르고 받아볼 수 있어서 아주 만족했습니다! 추천 받은 상품들도 만족스러워요~</p>
              </div>
              <p
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  fontSize: '12px'
                }}>2022.08.25</p>
            </div>
          <div
            style={{
              backgroundColor: '#F6F1EC',
              borderRadius: '5px',
              boxShadow: '1px 2px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              justifyContent: 'space-around',
              margin: '3px 0 10px 0',
              textAlign: 'start',
              padding: '0 2rem 0 2rem'
            }}>
              <div style={{ marginRight: '2rem'}}>
                <p style={{ fontWeight: 'bold'}}>작성자이름</p>
                <p>☆☆☆☆☆</p>
              </div>
              <div style={{ marginRight: '2rem'}}>
                <p>딱 필요한 구성으로 고르고 받아볼 수 있어서 아주 만족했습니다! 추천 받은 상품들도 만족스러워요~</p>
              </div>
              <p
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  fontSize: '12px'
                }}>2022.08.25</p>
            </div>
          <div
            style={{
              backgroundColor: '#F6F1EC',
              borderRadius: '5px',
              boxShadow: '1px 2px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              justifyContent: 'space-around',
              margin: '3px 0 10px 0',
              textAlign: 'start',
              padding: '0 2rem 0 2rem'
            }}>
              <div style={{ marginRight: '2rem'}}>
                <p style={{ fontWeight: 'bold'}}>작성자이름</p>
                <p>☆☆☆☆☆</p>
              </div>
              <div style={{ marginRight: '2rem'}}>
                <p>딱 필요한 구성으로 고르고 받아볼 수 있어서 아주 만족했습니다! 추천 받은 상품들도 만족스러워요~</p>
              </div>
              <p
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  fontSize: '12px'
                }}>2022.08.25</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MoreReview