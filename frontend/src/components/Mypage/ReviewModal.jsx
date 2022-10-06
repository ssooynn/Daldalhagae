import React from 'react'
import { FlexBox } from './MypageCommon'
import {  ImStarFull } from "react-icons/im";
import {RatingBox} from './MypageCommon'
import './MypageStyle.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


import { reviewWrite } from '../../api/mypageReview';

import Swal from 'sweetalert2'


import Emo1 from '../../assets/img/ReviewEmo1.png'
import Emo1Full from '../../assets/img/ReviewEmo1Full.png'
import Emo2 from '../../assets/img/ReviewEmo2.png'
import Emo2Full from '../../assets/img/ReviewEmo2Full.png'
import Emo3 from '../../assets/img/ReviewEmo3.png'
import Emo3Full from '../../assets/img/ReviewEmo3Full.png'
import Emo4 from '../../assets/img/ReviewEmo4.png'
import Emo4Full from '../../assets/img/ReviewEmo4Full.png'
import Emo5 from '../../assets/img/ReviewEmo5.png'
import Emo5Full from '../../assets/img/ReviewEmo5Full.png'


const ReviewModal = (props) => {
  const navigate = useNavigate()
  const {setPopup,subscription} = props
  const [review, setReview] = useState({
    subscriptionNo:'',
    serviceReviewRate:'',
    serviceReviewContent:'',
    itemReviewReqList:  []
  })
  // console.log(review)
  const [clicked, setClicked] = useState([false, false, false, false, false])
  const [isHover, setIsHover] = useState(false)
  const [selectedVal, setSelectedVal] = useState({})
  const [filename,setFilename] =useState('파일을 업로드해주세요')
  const [newFilename, setNewFilename] = useState('')
  const [profile, setProfile] = useState('')

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
     setClicked(clickStates);
     setReview({...review, serviceReviewRate:index+1})
   };


  useEffect(()=>{
    const itemReview = subscription.purchaseResList.map((purchase)=>{
      return ({
        itemSno:purchase.itemSno,
        purchaseNo:purchase.purchaseNo,
        rate:'',
        content:'',
      })
    })
    setReview({
      subscriptionNo: subscription.subscriptionNo,
      serviceReviewRate:'',
      serviceReviewContent:'',
      itemReviewReqList:itemReview
    })
    setSelectedVal({})
    setClicked([false, false, false, false, false])

  },[])

  const onServiceContentInput = (e) =>{
    const value = e.target.value
    setReview({...review, serviceReviewContent:value})
  }

  // 상품 별 점수 입력
  const onItemEval= (purchaseIdx,purchaseNo, val)=>{
    const itemreviewReqTemp = review.itemReviewReqList
    itemreviewReqTemp[purchaseIdx].rate = val
    setReview({...review, itemReviewReqList:itemreviewReqTemp})
    setSelectedVal({...selectedVal, [purchaseNo]:val})
  }
  // 상품 별 줄 글 입력
  const onContentInput = (e, purchaseIdx) =>{
    const  itemreviewReqTemp = review.itemReviewReqList
    itemreviewReqTemp[purchaseIdx].content = e.target.value
    setReview({...review, itemReviewReqList:itemreviewReqTemp})    
  }

  const uploadPhoto = (e) => {
    e.preventDefault()
    setProfile(e.target.files[0])
    setFilename(e.target.files[0]?.name)
  }

  const onSubmit = () => {
    Swal.fire({
      padding:'15px',
      text: "수정 내용을 저장하시겠습니까?",
      width:'30%',
      showCancelButton: true,
      confirmButtonColor: '#AC998A',
      cancelButtonColor: '#BEC3C6',
      confirmButtonText: '저장하기',
      cancelButtonText: '취소하기',
    })
    .then((result) => {
      if (result.isConfirmed) {
        console.log(review)
        const formData = new FormData()
        const reviewBlob = new Blob([JSON.stringify(review)], {
          type: "application/json",
        });
        formData.append("serviceReviewReq", reviewBlob);
        formData.append("file",profile)
        
        reviewWrite(formData)
        .then((res)=>{
          console.log(res)
          Swal.fire({
            width:'25%',
            position: "center",
            title: "🤎  저장되었습니다 :)",
            showConfirmButton: false,
            timer: 1000,
            customClass:{
              icon:'smallIcon',
              title:'midFont'
            }
          })
          setPopup(false)
          navigate('/mypage/reviews')
        })
        .catch((err)=>{console.log(err)})
      }})}


  const back = {
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: '10',
    height:'150%',
    width: '100%',
    overFlow:'hidden',
    position: 'absolute',
    top:'0',
    left:'0',
  }

  const reviewModal = {
    backgroundColor:'white',
    display: "block",
    position: "fixed",
    top: "50%",
    left:'50%',
    transform: 'translate(-50%,-50%)', 
    width: "37%",
    height: "80%",
    borderRadius:'10px',
    overflowY:'hidden',
    minWidth:'500px'
  }

  const modalTitle = {
    height: '50px',
    borderBottom:'0.1px solid #929292',
    width: '100%',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    fontSize: '20px',
    fontWeight:'500'

  }

  const gridDiv = {
    display:'grid',
    gridTemplateColumns:'repeat(5, minmax(0, 1fr))',
    gap: '2%',
    marginBottom: '7px',
    width:'100%',
  }

  const hoverPointer = {
    cursor: isHover?'pointer':''
  }

  const subsTitle ={
    fontSize:'20px',
    fontWeight:'600',
    marginBottom:'8px'

  }

  const sub ={
    fontSize:'14px',
    fontWeight:'400'
  }

  const detailText ={
    fontSize:'13px',
    fontWeight:'300',
    marginBottom:'8px'
  }

  const serviceRev ={
    margin:'30px 0px',
    borderBottom:'0.1px solid #929292'
  }

  const submitButton = {
    width:'100%',
    height:'40px',
    backgroundColor:'#AC998A',
    color:'white',
    border:'none',
    marginBottom:'30px',
    borderRadius:'5px',
    cursor:'pointer'
  }

  // 구독 진행중 여부 판단
  const endDate = new Date(subscription.subscriptionEndDate)
  const today = new Date()

  let onGoing
  if (endDate >= today) {
  onGoing = '구독 중'
  } else{
  onGoing = '구독 종료'
  }
  // console.log(subscription)

  return (
    <div style={back} onClick={()=>{setPopup(false)}}>
      <div style={reviewModal} onClick={(e)=>{e.stopPropagation()}}>
      <div style={modalTitle}> 
        후기 작성        
        <FontAwesomeIcon icon={faXmarkSquare} style={{position:'fixed', right:'18px',  fontSize:'24px'}} onClick={ ()=>{setPopup(false)} }/>
      </div>
      <div className='scrollBar'>
        <div>
          <div style={subsTitle}>{subscription.subscriptionName}  <span style={sub}>[ {onGoing} | {subscription.petName} ]</span></div>
          <div style={sub}>구독 기간 : {subscription.subscriptionStartDate.replaceAll('-','.')} ~ {subscription.subscriptionEndDate.replaceAll('-','.')} </div>

          <div style={serviceRev}> 
            <div style={{fontWeight:'500', marginBottom:'3px'}}>서비스 리뷰</div>
            <div style={detailText}>본 구독의 배송, 포장, 질문, 응대 등 전체적인 서비스는 어떠셨나요?</div>
            <RatingBox>
              {[0,1,2,3,4].map((el,idx) => (
              <ImStarFull
                key={el}
                style={{marginRight:'2px'}}
                onClick={() => handleStarClick(el)}
                className={clicked[el] && 'black'}
                size="24"
              />))}
            </RatingBox>

            <textarea name="" id="" cols="30" rows="10" value={review.serviceReviewContent} onChange={onServiceContentInput} placeholder='상세한 후기를 들려주세요 :)'></textarea>
            <div className='file'>
              <div className='filebox bs3-primary ' >
                <label>업로드
                  <input type="file" id="newFile" className="upload-hidden" onInput={uploadPhoto}/> 
                </label> 
                <input className="upload-name" id='upload-name' value={filename} disabled/>
              </div>

              {/* <label className="input-file-button" for="input-file" onChange={uploadPhoto}>
                업로드
              </label>
              <input type="file" id="input-file" style={{display:"none"}} onChange={uploadPhoto}/> 
              <div id="file-name"></div> */}
            </div>
          </div>
          <div style={serviceRev}>
            <div style={{fontWeight:'500', marginBottom:'3px'}}>상세 상품 리뷰</div>
            <div style={detailText}>추천 받은 상품에 대해 얼마나 만족하시나요?</div>
            {/* map으로 돌리기 */}
            <div>
              {subscription.purchaseResList.map((purchase,idx)=>{
                
                return(
                  <div key={purchase.purchaseNo} style={{margin:'20px 0px'}}>
                    <div style={gridDiv}>
                      <div style={{gridColumn:'span 1'}}>
                        <img style={{aspectRatio:'1/1', width:'100%'}} src={purchase.itemImg} alt="상품 사진" />
                      </div>
                      <FlexBox direction='column' align='start' style={{gridColumn:'span 4'}}>
                        <div style={{fontSize:'14px', marginBottom:'5px'}}>{purchase.itemName}</div>
                        <div style={{...gridDiv, marginTop:'5px'}}>
                        {['a','b','c','d','e'].map((el, index)=>{
                          const expression = ['아주 불만족', '불만족', '보통', '만족', '아주 만족']
                          const basicImg = [Emo1, Emo2, Emo3, Emo4, Emo5]
                          const colorImg = [Emo1Full, Emo2Full, Emo3Full, Emo4Full, Emo5Full]
                          
                          return(
                            <FlexBox direction='column' width='100%' key={purchase.purchaseNo+el}
                              style={hoverPointer} 
                              onPointerOver={()=> setIsHover(purchase.purchaseNo+el)}
                              onPointerOut={() => setIsHover(false)}
                              onClick={()=>{onItemEval(idx,purchase.purchaseNo, index+1)}}>
                              <div><img style={{aspectRatio:'1/1', width:'26px'}} src={isHover===purchase.purchaseNo+el || selectedVal[purchase.purchaseNo] === index+1 ? colorImg[index] : basicImg[index]} alt="이모티콘" /></div>
                              <div style={{fontSize:'12px', fontWeight:'300', whiteSpace:'nowrap'}}>{expression[index]}</div>
                            </FlexBox>
                          )
                        })}
                        </div>
                      </FlexBox>
                    </div>
                    <input id='styledInput' type="text" value={review.itemReviewReqList[idx]?.content} onChange={(e)=>{onContentInput(e, idx)}} placeholder='상세한 후기를 들려주세요 :)'/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <button style={submitButton} onClick={onSubmit}>리뷰 작성하기</button>
      </div>
      
        
      </div>
    </div>
  )
}

export default ReviewModal