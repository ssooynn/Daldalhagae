
  // function clickFeedCard(e, i, numbers) {  // 사료 클릭
  //   e.preventDefault()
  //   let copiedFeeds = [...checkFeeds]
  //   const copyProducts = [...props.products]
  //   const maxNum = numbers[0]
  //   if (checkFeeds[i]) {
  //     copiedFeeds[i] = false
  //     setcheckFeeds(copiedFeeds)
  //     for (let j = 0; j < copyProducts[props.index][0].length; j++) {
  //       if (copyProducts[props.index][0][j].name === feeds[i].name) {
  //         copyProducts[props.index][0].splice(j, 1)
  //       }break}
  //   } else {
  //     if (copyProducts[props.index][0].length < maxNum) {
  //       copiedFeeds[i] = true
  //       setcheckFeeds(copiedFeeds)
  //       copyProducts[props.index][0].push(feeds[i])
  //     } else {alert(`사료는 ${maxNum}개까지만 선택해주세요.`)}
  //   }
  //   props.setPickedProducts(copyProducts)
  // }

  // const feedCarouselGrid = {
  //   width:`${feeds.length * (100 / 3)}%`,
  //   display: 'grid',
  //   gridTemplateColumns:`repeat(${feeds.length}, minmax(0, 1fr))`,
  //   gap: '1%',
  //   padding: '10px 2px',
  //   boxSizing: 'border-box',
  // }
  
  // const fff = <div style={{overflow:'hidden', width:'100%'}}>
  //   <div style={{...feedCarouselGrid, transform: `translate3d(${-index * (100/feeds.length)}%,0,0)`, transitionDuration:'1s'}}>
  //     {feeds.map((feed, i)=>{
  //         return <div className={checkFeeds[i] ? 'clickCard' : 'card'} onClick={(e) => { clickFeedCard(e, i, props.info[4]) }}>
  //           <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
  //             <div>
  //               <img src={사료} width='180px' alt="" />
  //               <p>{feeds[i].name}{i}</p>
  //             </div>
  //             <div
  //               style={{
  //                 display: 'flex',
  //                 justifyContent: 'space-between',
  //                 fontSize: '12px'
  //               }}>
  //               <p>주 원료</p>
  //               <p>{feeds[i].materials}</p>
  //             </div>
  //             <div
  //               style={{
  //                 display: 'flex',
  //                 justifyContent: 'space-between',
  //                 fontSize: '12px'
  //               }}>
  //               <p>급여 대상</p>
  //               <p>{feeds[i].targets}</p>
  //             </div>
  //             <div
  //               style={{
  //                 display: 'flex',
  //                 justifyContent: 'space-between',
  //                 fontSize: '12px'
  //               }}>
  //               <p>입자 크기</p>
  //               <p>{feeds[i].particle}</p>
  //             </div>
  //             <div
  //               style={{
  //                 display: 'flex',
  //                 justifyContent: 'space-between',
  //                 fontSize: '12px'
  //               }}>
  //               <p>기능</p>
  //               <p>{feeds[i].effects}</p>
  //             </div>
  //           </div>
  //           <div> {/* 리뷰 */}
  //             <p>67명이 이 사료를 받았어요</p>
  //             <div>
  //               <p style={{ margin: 'auto' }}>최근 리뷰</p>
  //             </div>
  //             <Reviews />
  //             <p
  //               onClick={event => {
  //                 event.preventDefault()
  //                 showMoreReview()
  //               }} className='moreReview'>리뷰 더보기</p>
  //             {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} info={feeds[i]} />}
  //           </div>
  //         </div>
  //       })}
  //   </div> 
  // </div> 
  
  const snackCarouselGrid = {
    width:`${snacks.length * (100 / 3)}%`,
    display: 'grid',
    gridTemplateColumns:`repeat(${snacks.length}, minmax(0, 1fr))`,
    gap: '1%',
    padding: '10px 2px',
    boxSizing: 'border-box',
  }
  const toyCarouselGrid = {
    width:`${toys.length * (100 / 3)}%`,
    display: 'grid',
    gridTemplateColumns:`repeat(${toys.length}, minmax(0, 1fr))`,
    gap: '1%',
    padding: '10px 2px',
    boxSizing: 'border-box',
  }
  const sss = <div style={{overflow:'hidden', width:'100%'}}>
    <div style={{...snackCarouselGrid, transform: `translate3d(${-index * (100/snacks.length)}%,0,0)`, transitionDuration:'1s'}}>
      {snacks.map((snack, i)=>{
        return <div className={checkSnacks[i] ? 'clickCard' : 'card'} onClick={(e) => { clickSnackCard(e, i, props.info[4]) }}>
          <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
            <div>
              <img src={간식} width='180px' alt="" />
              <p>{snacks[i].name}{i}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>주 원료</p>
              <p>{snacks[i].materials}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>급여 대상</p>
              <p>{snacks[i].targets}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>입자 크기</p>
              <p>{snacks[i].particle}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>기능</p>
              <p>{snacks[i].effects}</p>
            </div>
          </div>
          <div> {/* 리뷰 */}
            <p>67명이 이 사료를 받았어요</p>
            <div>
              <p style={{ margin: 'auto' }}>최근 리뷰</p>
            </div>
            <Reviews />
            <p
              onClick={event => {
                event.preventDefault()
                showMoreReview()
              }} className='moreReview'>리뷰 더보기</p>
            {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} info={snacks[i]} />}
          </div>
        </div>
      })}
    </div>
  </div>
  const ttt = <div style={{overflow:'hidden', width:'100%'}}>
    <div style={{...toyCarouselGrid, transform: `translate3d(${-index * (100/toys.length)}%,0,0)`, transitionDuration:'1s'}}>
      {toys.map((toy, i)=>{
        return <div className={checkToys[i] ? 'clickCard' : 'card'} onClick={(e) => { clickToyCard(e, i, props.info[4]) }}>
          <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
            <div>
              <img src={장난감} width='180px' alt="" />
              <p>{toys[i].name}{i}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>주 원료</p>
              <p>{toys[i].materials}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>급여 대상</p>
              <p>{toys[i].targets}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>입자 크기</p>
              <p>{toys[i].particle}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>기능</p>
              <p>{toys[i].effects}</p>
            </div>
          </div>
          <div> {/* 리뷰 */}
            <p>67명이 이 사료를 받았어요</p>
            <div>
              <p style={{ margin: 'auto' }}>최근 리뷰</p>
            </div>
            <Reviews />
            <p
              onClick={event => {
                event.preventDefault()
                showMoreReview()
              }} className='moreReview'>리뷰 더보기</p>
            {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} info={toys[i]} />}
          </div>
        </div>
      })}
    </div>
  </div>

  
const product = [{
  sno: '',
  name: '사료',
  image: 사료,
  effects: ['건강에 좋음'],
  targets: ['전연령'],
  materials: ['밀가루', '돼지고기'],
  particle: '중',
  grade: '',
  reviewNum: '',
  reviewList: [{
    rate: '',
    content: '',
    usersName: '',
    date: ''
  }]
}, {
  sno: '',
  name: '간식',
  image: 간식,
  effects: ['건강에 좋음'],
  targets: ['전연령'],
  materials: ['밀가루', '돼지고기'],
  particle: '중',
  grade: '',
  reviewNum: '',
  reviewList: [{
    rate: '',
    content: '',
    usersName: '',
    date: ''
  }]
}, {
  sno: '',
  name: '장난감',
  image: 장난감,
  effects: ['건강에 좋음'],
  targets: ['전연령'],
  materials: ['밀가루', '돼지고기'],
  particle: '중',
  grade: '',
  reviewNum: '',
  reviewList: [{
    rate: '',
    content: '',
    usersName: '',
    date: ''
  }]
}]