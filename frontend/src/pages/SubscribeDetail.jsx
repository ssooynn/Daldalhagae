import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import img1 from '../assets/img/구독리스트1.png'
import img2 from '../assets/img/구독리스트2.png'
import img3 from '../assets/img/구독리스트3.png'
import daldalPackage from '../assets/img/otherPackage1.png'
import toyPackage from '../assets/img/otherPackage2.png'
import lightPackage from '../assets/img/otherPackage3.png'
import imgB from '../assets/img/구독상세페이지2.png'
import imgD from '../assets/img/구독상세페이지5.png'
import imgE from '../assets/img/구독상세페이지6.png'
import imgF from '../assets/img/구독상세페이지7.jpg'
import 사료 from '../assets/img/상품구성_사료.png'
import 간식 from '../assets/img/상품구성_간식.png'
import 장난감 from '../assets/img/상품구성_장난감.png'

import PurchaseList from '../components/PurchaseList'
import AutoSlides from '../components/AutoSlides'
import Footer from '../components/Footer';

function Component(props) {
  const images = [사료,간식,장난감]
  const showComponents = useState([])
  for (let i = 0; i < props.components.length; i++) {
    if (props.components[i]) {
      showComponents.push(
        <div>
          <img src={images[i]} width='300px' height='300px' alt='pet'
           style={{borderRadius: '5px'}}/>
          <p>{props.components[i]}</p>
        </div>)
    }
  }
  return <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '5rem',
    }}>
    {showComponents}
  </div>
}

const SubscribeDetail = () => {
  const location = useLocation()
  const name = location.state.name
  const intro = location.state.intro
  const components1 = location.state.components1
  const components2 = location.state.components2
  const price = location.state.price
  const [pets, setPets] = useState([])
  const [feeds, setFeeds] = useState([])
  const [snacks, setSnacks] = useState([])
  const [toys, setToys] = useState([])

  useEffect(()=>{
    const usersSno = 'uXJFRDEC7DuyYasedNxU1'
    // const usersSno = useSelector((state)=>state.user.user.user.usersSno)
    // Authorization: `Bearer` + `a.a.a`
    axios({
      method: 'get',
      url: `https://j7a302.p.ssafy.io/api-gateway/business-api/subscription/detail/${usersSno}`,
      headers: {
        'Authorization': `Bearer a.a.a`
      }
    })
      .then((res)=>{
        setPets(res.data.pets)
        setFeeds(res.data.feeds)
        setSnacks(res.data.snacks)
        setToys(res.data.toys)
      })
      .catch((err)=>{
        console.log(err)
      })
  }, [])
  const info = [name, intro, components1, price, components2, pets]
  let image = undefined
  if (name === 'Basic Package') {
    image = img1
  } else if (name === 'Play Package') {
    image = img2
  } else if (name === 'All In One Package') {
    image = img3
  } else if (name === 'DalDal Package') {
    image = daldalPackage
  } else if (name === 'Toy Package') {
    image = toyPackage
  } else if (name === 'Light All Package') {
    image = lightPackage
  }
  return (
    <div
      style={{
        backgroundColor: '#FFFDFB',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <div  // 상담: 구독 설정
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '10rem',
          textAlign: 'end',
          width: '70%'
        }}>
        <img src={image} width='540px' height='400' alt='package'/>
        <div>
          <h2 style={{margin: 'auto'}}>{name}</h2>
          <p style={{margin: '0.5rem auto', fontSize: '12px'}}>{intro}</p>
          <h4 style={{margin: 'auto'}}>월 {price}원</h4>
          <p   style={{margin: '1.5rem 0 0.5rem 0'}}>누구를 위한 사료인가요?</p>
          <PurchaseList info={info}/>
        </div>
      </div>
      <div  // 하단: 구독 서비스 설명
        style={{
          margin: '10rem 0 0 0',
          color: '#AC998A',
          width: '70%',
          textAlign: 'center'
        }}>
        <div> {/* 설명 헤더 */}
          <h2>우리 강아지만을 위한 맞춤 구독 서비스</h2>
          <h2>{name}</h2>
          <img src={imgB} width='100%' alt='package'/>
          <h5>반려견을 위한 모든 것을 한번에 구독하세요</h5>
        </div>
        <div> {/* 구성 상품 */}
          <h2 style={{
            marginTop: '10rem'
          }}>상품구성</h2>
          <Component components={components1} />
        </div>
        <div  // 사료 소개 시작
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '15rem'
          }}>
          <img src={imgF} width='400px' alt='img' style={{borderRadius: '5px'}}/>
          <div
            style={{

          }}>
            <p>안전한 홀리스틱 등급 이상의</p>
            <h3>사료 맞춤 추천</h3>
          </div>
        </div>
        <AutoSlides info={feeds}/>
        <div  // 간식 소개 시작
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '15rem'
          }}>
          <div
            style={{

          }}>
            <p>반려견에게 생기를 불어 넣어주는</p>
            <h3>간식 맞춤 추천</h3>
          </div>
          <img src={imgD} width='400px' alt='img'/>
        </div>
        <AutoSlides info={snacks}/>
        <div  // 장난감 소개 시작
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '15rem'
          }}>
          <img src={imgE} width='400px' alt='img'/>
          <div
            style={{

          }}>
            <p>반려견이 재밌게 놀 수 있게</p>
            <h3>장난감 맞춤 추천</h3>
          </div>
        </div>
        <AutoSlides info={toys}/>
        <div  // 마무리 글
          style={{
            margin: '15rem 0 15rem 0'
          }}>
          <h2>지금 바로 '달달하개'를 시작해 보세요</h2>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SubscribeDetail