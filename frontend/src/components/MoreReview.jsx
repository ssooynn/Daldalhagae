import React, {useEffect, useState} from 'react'
import axios from 'axios'
import imgD from '../assets/img/구독상세페이지4.png'
import styled from 'styled-components'

const ReviewCard = styled.div`
background-color: #F6F1EC;
border-radius: 5px;
box-shadow: 1px 2px rgba(0, 0, 0, 0.25);
display: flex;
justify-content: space-around;
margin: 3px 0 10px 0;
text-align: start;
padding: 0 2rem 0 2rem;
`

function Reviews() {
  const [showReviews, setShowReviews] = useState([])
  const [itemSno, page, size, sort] = ['f05C8ZXZjHZrZaeUB8eYN', 0, 5, 'date']
  const [showPaginator, setShowPaginator] = useState([])
  useEffect(()=>{
    axios({
      method: 'get',
      url: `https://j7a302.p.ssafy.io/api-gateway/business-api/review/item/${itemSno}?page=${page}&size=${size}&sort=${sort}`,
      headers: {
        'Authorization': `Bearer a.a.a`
      }
    })
    .then((res)=>{
      for (let i = 0; i < res.data.totalPages; i++) {
        showPaginator.push(<p style={{margin: 'auto 3px'}}>{i+1}</p>)
      }
      const copyShowPaginator = [...showPaginator]
      setShowPaginator(copyShowPaginator)
      const reviews = res.data.reviewList
      for (let i = 0; i < reviews.length; i++) {
        let star;
        switch (reviews[i].rate) {
          case 1:
            star = '★☆☆☆☆'
            break;
          case 2:
            star = '★★☆☆☆'
            break;
          case 3:
            star = '★★★☆☆'
            break;
          case 4:
            star = '★★★★☆'
            break;
          default:
            star = '★★★★★'
            break;
        }
        showReviews.push(<ReviewCard>
            <div style={{ marginRight: '2rem'}}>
              <p style={{ fontWeight: 'bold'}}>{reviews[i].usersName}</p>
              <p style={{color: '#FFD100'}}>{star}</p>
            </div>
            <div style={{ marginRight: '2rem'}}>
              {/* <p>{reviews[i].content}</p> */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <p></p>
            </div>
            <p
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                fontSize: '12px',
                width: '300px',
                justifyContent: 'flex-end',
              }}>{reviews[i].date}</p>
          </ReviewCard>)
      }
      const copyShowReviews = [...showReviews]
      setShowReviews(copyShowReviews)

    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])
  return <div>
      {showReviews}
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {showPaginator}
      </div>
    </div>
}

function MoreReview(props) {
  function closeReview() { // 모달 끄기
    props.setReviewOpen(false)
  }
  useEffect(() => {
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
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
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
          <div  // 제품 정보
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
          <div  // 리뷰
            style={{
              fontSize: '13px'
            }}>
            <p style={{textAlign: 'end'}}>리뷰목록</p>
          </div>
          <hr />
          <Reviews></Reviews>
        </div>
      </div>
    </div>
  )
}

export default MoreReview