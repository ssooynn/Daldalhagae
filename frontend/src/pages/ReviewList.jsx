import React from 'react'
import { useEffect, useState } from 'react'
import { reviewAll } from '../api/reviewList'
import ReviewCard from '../components/ReviewCard'
import ReviewPagination from '../components/ReviewPagination'
import Footer from '../components/Footer'

import { range } from "lodash";

export default function ReviewList() {
  const [reviews, setReviews] = useState([])
  const [viewablePages, setViewablePages] = useState([])
  const [page, setPage] = useState(1);
  const [totPage, setTotPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=> {
    reviewAll(page-1)
    .then((res)=> {
      console.log(res)
      setReviews(res.data.content)
      setIsLoading(false)
      setTotPage(Math.ceil(res.data.totElements/20))

    }).catch((err)=>{console.log(err)})

  },[page])

  useEffect(()=>{
    setViewablePages([...range(1, Math.min(totPage, 5) + 1)]);
  },[totPage])

  const gridDiv  ={
    display:'grid',
    gridTemplateColumns:'repeat(4, minmax(0, 1fr))',
    gap: '1%',
    height:'auto',
    marginBottom:'50px',
  }


    return (
      <>
      <div style={{width:'70%', margin:'auto'}}>
        <div style={{height:'70px'}}></div>
        <div style={{fontSize:'20px', marginTop:'30px', marginBottom:'5px'}}>
          고객리뷰
        </div>
        <div style={{fontSize:'16px', fontWeight:'300', marginBottom:'30px'}}>달달하개를 이용해주신 고객님들의 리얼 후기를 확인하세요 :)</div>
        {isLoading? 
        <div style={{height:'90vh', width:'100%', position:'relative'}}>
          <div className="dots-bars-3" style={{position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}></div>
        </div> 
        :
        <>
          <div style={gridDiv}>
            {reviews.map((review, idx)=>{
              return(
                <ReviewCard key={idx} review={review}></ReviewCard>
              )
            })}
          </div>
          <ReviewPagination setIsLoading={setIsLoading} viewablePages={viewablePages} setViewablePages={setViewablePages} setPage={setPage} page={page} totPage={totPage} ></ReviewPagination>
        </>
        }
      <div style={{height:'70px'}}></div>
      </div>
      <Footer></Footer>
      
      </>
    )
}
