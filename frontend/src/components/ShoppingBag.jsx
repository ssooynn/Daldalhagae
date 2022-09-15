import React from 'react'

const ShoppingBag = (props) => {
  function closeBag() {
    props.setBagOpen(false)
  }
  return (
    <div
      onClick={closeBag}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}>
      <div
        onClick={(e)=>e.stopPropagation()}
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '40%',
          height: '100%',
          textAlign: 'start',
          zIndex: '1',
          backgroundColor: 'rgba(246, 241, 236, 0.9)',
          padding: '8rem 2rem 0 2rem'
        }}>
        <p
          onClick={closeBag}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            right: '30px',
            top: '0',
          }}>✖</p>
        <h3>장바구니</h3>
        <hr style={{backgroundColor: '#CCAA90', height: '1px'}} />
        <div
          style={{
            backgroundColor: '#CCAA90',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: '5px',
            height: '45px'
          }}>
          <p>결제하기</p>
        </div>
      </div>
    </div>
  )
}

export default ShoppingBag