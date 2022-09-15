import React from 'react'
import { useEffect } from 'react'
import Icon from '../assets/img/modalIcon.png'

function RecommendConfirmModal(props) {
  function closeModal() { // 모달 끄기
    props.setModalOpen(false)
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
      onClick={closeModal}
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
          width: '400px',
          padding: '2rem 3rem 1rem 3rem',
          zIndex: '1',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
        <p
          onClick={closeModal}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            right: '30px',
            top: '0',
          }}>✖</p>
        <img src={Icon} alt="icon" />
        <h2>추천 목록을 보시겠어요?</h2>
        <div
          style={{
            color: '#6E6E6E',
            fontSize: '13px'
          }}>
          <p style={{marginBottom: '0'}}>추천 목록을 보지 목록 중에서 원하는 제품을 선택할 수 있어요.</p>
          <p style={{marginTop: '0'}}>(보지 않을 시 저희가 가장 추천하는 상품을 자동으로 배송해드립니다.)</p>
        </div>
        <div
          style={{
            backgroundColor: '#EDDCCF',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}><p>예, 보겠습니다.</p></div>
        <div
          style={{
            backgroundColor: '#F6F1EC',
            color: '#6E6E6E',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '3px'
          }}><p>아니요, 괜찮습니다.</p></div>
      </div>
    </div>
  )
}

export default RecommendConfirmModal