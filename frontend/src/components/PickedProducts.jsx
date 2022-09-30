import React from 'react'

const list1 = []
const PickedProducts = (props) => {
	console.log('asdf', props)
	list1.push(props[0])
  return <div  // 선택한 목록
    style={{
      backgroundColor: '#F6F1EC',
      margin: '3rem 0 4rem 0',
      padding: '2rem',
      textAlign: 'start',
      borderRadius: '5px',
      boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)',
    }}> 
    <h3 style={{margin: 'auto'}}>선택한 목록</h3>
    <hr />
		{list1}
  </div>
}

export default PickedProducts