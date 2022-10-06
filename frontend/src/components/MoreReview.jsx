import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Loading from './LoadingComponent'

const ReviewCard = styled.div`
background-color: #F6F1EC;
border-radius: 5px;
box-shadow: 1px 2px rgba(0, 0, 0, 0.25);
display: flex;
justify-content: space-between;
margin: 3px 0 10px 0;
text-align: start;
padding: 0 2rem 0 2rem;
`

function Reviews(props) {
  const [showReviews, setShowReviews] = useState([])
  const [itemSno, setItemSno] = useState(props.itemSno)
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(5)
  const [sort, setSort] = useState('date')
  const [showPaginator, setShowPaginator] = useState([])
  const [loading, setLoading] = useState(true)
  let totalPages = 10
  function MovePage(e, i) {
    e.preventDefault()
    setPage(i)
    setShowPaginator([])
    setShowReviews([])
  }
  useEffect(()=>{
    setLoading(true)
    axios({
      method: 'get',
      url: `https://j7a302.p.ssafy.io/api-gateway/business-api/review/item/${itemSno}?page=${page}&size=${size}&sort=${sort}`,
      headers: {
        'Authorization': `Bearer a.a.a`
      }
    })
    .then((res)=>{
      console.log(res.data.totalPages)
      if (res.data.totalPages < totalPages) {
        totalPages = res.data.totalPages
      }
      for (let i = 0; i < totalPages; i++) {
        showPaginator.push(<p onClick={(e)=>MovePage(e, i)} style={{margin: 'auto 3px', cursor: 'pointer'}}>{i+1}</p>)
      }
      const copyShowPaginator = [...showPaginator]
      setShowPaginator(copyShowPaginator)
      const reviews = res.data.reviewList
      for (let i = 0; i < size; i++) {
        let star = '★';
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
            <div style={{ display: 'flex'}}>
              <div style={{marginRight: '2rem'}}>
                <p style={{ fontWeight: 'bold'}}>{reviews[i].usersName}</p>
                <p style={{color: '#FFD100'}}>{star}</p>
              </div>
              <div style={{marginRight: '1rem'}}>
                <p style={{fontSize: '13px'}}>{reviews[i].content}</p>
              </div>
            </div>
            <p
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                fontSize: '12px',
                width: '100px',
                justifyContent: 'flex-end',
              }}>{reviews[i].date}</p>
          </ReviewCard>)
      }
      const copyShowReviews = [...showReviews]
      setShowReviews(copyShowReviews)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [page])
  return <div>
    {loading ? 
      <Loading></Loading> : <div>
        {showReviews}
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {showPaginator}
        </div>
      </div>
    }
  </div>
}

function MoreReview(props) {
  console.log(props)
  const info = props.info
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
  
  const [productInfo, setProductInfo] = useState('')
  useEffect(()=>{
    switch (props.kind) {
      case '사료':
        return setProductInfo(<div  // 제품 정보
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <div>
            <img src={info.image} width='200px' height='150px' alt="img" />
            <p>{info.name}</p>
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '300px',
                fontSize: '10px'
              }}>
              <p style={{fontSize: '14px'}}>주원료</p>
              <p style={{fontSize: '14px'}}>{info.materials}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '300px',
                fontSize: '10px'
              }}>
              <p style={{fontSize: '14px'}}>급여 대상</p>
              <p style={{fontSize: '14px'}}>{info.targets}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '300px',
                fontSize: '10px'
              }}>
              <p style={{fontSize: '14px'}}>입자크기</p>
              <p style={{fontSize: '14px'}}>{info.particle}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '300px',
                fontSize: '10px'
              }}>
              <p style={{fontSize: '14px'}}>기능</p>
              <p style={{fontSize: '14px'}}>{info.effects}</p>
            </div>
          </div>
        </div>)
      case '간식':
        return  setProductInfo(<div  // 제품 정보
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <div style={{width: '300px'}}>
          <img src={info.image} alt="img" />
          <p>{info.name}</p>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '300px',
              fontSize: '10px'
            }}>
            <p style={{fontSize: '14px'}}>주원료</p>
            <p style={{fontSize: '14px'}}>{info.materials}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '300px',
              fontSize: '10px'
            }}>
            <p style={{fontSize: '14px'}}>급여 대상</p>
            <p style={{fontSize: '14px'}}>{info.targets}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '300px',
              fontSize: '10px'
            }}>
            <p style={{fontSize: '14px'}}>기능</p>
            <p style={{fontSize: '14px'}}>{info.effects}</p>
          </div>
        </div>
      </div>)
      default:
        return  setProductInfo(<div  // 제품 정보
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <div>
          <img src={info.image} width='200px' height='150px' alt="img" />
          <p>{info.name}</p>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '300px',
              fontSize: '10px'
            }}>
            <p style={{fontSize: '14px'}}>소재</p>
            <p style={{fontSize: '14px'}}>{info.materials}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '300px',
              fontSize: '10px'
            }}>
            <p style={{fontSize: '14px'}}>기능</p>
            <p style={{fontSize: '14px'}}>{info.effects}</p>
          </div>
        </div>
      </div>)
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
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'default',
        zIndex: '999'
      }}>
      <div
        className='scrollBar'
        onClick={(e)=>e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          width: '60%',
          padding: '2rem 0 1rem 0',
          zIndex: '99',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          height: '40rem'
        }}>
        <div
          style={{
            margin: '0 4rem'
          }}>
          <p
            onClick={closeReview}
            style={{
              cursor: 'pointer',
              position: 'absolute',
              right: '30px',
              top: '0',
            }}>✖</p>
          {productInfo}
          <div  // 리뷰
            style={{fontSize: '13px'}}>
            <p style={{textAlign: 'end'}}>리뷰목록</p>
          </div>
          <hr />
          <Reviews itemSno={info.sno}></Reviews>
        </div>
      </div>
    </div>
  )
}

export default MoreReview