import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { reviewList } from '../../api/mypageReview'
import SubscriptionItem from '../../components/Mypage/SubscriptionItem'
import MypagePagination from '../../components/Mypage/MypagePagination'

import { range } from "lodash";

const MypageReviews = () => {
  const userSno = 'udZ0a32z4Ur2LvGlmEXsN'
  const [reviews , setReviews] = useState([])
  const [page, setPage] = useState(1);
  const [contentCnt, setContentCnt] = useState(0);
  const [totPage, setTotPage] = useState(0);
  const [viewablePages, setViewablePages] = useState([]);
  const reviewsPerPage = 3;
  const [showContents, setShowContents] = useState([]);
  const [rerender, setRerender] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    reviewList(userSno)
    .then((res)=>{
      console.log(res)
      setReviews(res.data)
      setContentCnt(res.data.length)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  useEffect(() => {
    console.log(totPage)
    console.log(contentCnt)
    setTotPage(Math.ceil(contentCnt / reviewsPerPage));
    setViewablePages(contentCnt ? [...range(1, Math.min(totPage, 5) + 1)] : []);
  }, [contentCnt, totPage]);

  useEffect(() => {
    const tmp = reviews?.slice((page - 1) * reviewsPerPage, page * reviewsPerPage);
    setShowContents(tmp);
  }, [page, reviews, rerender]);


  return (
    <div style={{padding:'10px 5px', position:'relative'}}>
      {reviews?.length ?
        <>
        {showContents.map((review,idx)=>{
        return(
          <div key={idx}>
            <SubscriptionItem page='reviewList' bgImg={review.subscriptionName.replaceAll(' ','')} subscription={review} reviewConnect={false} isDetail={false} isToggle={true}></SubscriptionItem>
          </div>
        )
        })}
        <MypagePagination 
        totPage={totPage}
        page={page}
        viewablePages={viewablePages}
        setPage={setPage}
        setViewablePages={setViewablePages}
        ></MypagePagination>
        </>
    
    : 
      <div style={{margin:'auto', marginTop:'150px', textAlign:'center'}}>
      작성한 리뷰가 없어요 🐾
      </div>  
    }
    

    </div>
  )
}

export default MypageReviews