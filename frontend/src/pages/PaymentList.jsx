import React,{ useState, useEffect } from 'react';
import styled from 'styled-components'
import { StyledButton } from '../components/CommonComponent';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

import PackageImage1 from '../assets/img/BasicPackage.png'
import PackageImage2 from '../assets/img/PlayPackage.png'
import PackageImage3 from '../assets/img/AllInOnePackage.png'
import daldalPackage from '../assets/img/DalDalPackage.png'
import toyPackage from '../assets/img/ToyPackage.png'
import lightPackage from '../assets/img/LightAllInOnePackage.png'
import 자유구독 from '../assets/img/나만의구독서비스.png'
import axios from 'axios';


const PackageBox  = styled.div`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1.2rem;
::before{
  border-radius: 10px;
  background-size: cover;
  background-image: ${(props) => {
    let iamge;
    switch (props.packageName) {
      case 'Basic Package':
        iamge = `url(${PackageImage1})`;
        break;
      case 'Play Package':
        iamge = `url(${PackageImage2})`;
        break;
      case 'All In One Package':
        iamge = `url(${PackageImage3})`;
        break;
      case 'DalDal Package':
        iamge = `url(${daldalPackage})`;
        break;
      case 'Toy Package':
        iamge = `url(${toyPackage})`;
        break;
      case 'Light All Package':
        iamge = `url(${lightPackage})`;
        break;
      default:
        iamge = `url(${자유구독})`;
        break;
    }
    return iamge
  }};
  content: "";
  position: absolute;
  top: 0%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  opacity: 0.35;
}
object-fit: cover;
`

const PaymentList = () => {
  const location = useLocation()
  const infos = location.state.infos
  const pickedProducts = location.state.pickedProducts
  // console.log('info', infos)
  const Navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([])
  useEffect(() => {
    const usersSno = 'udZ0a32z4Ur2LvGlmEXsN'
    // const usersSno = useSelector((state)=>state.user.user.user.usersSno)
    // Authorization: `Bearer` + `a.a.a`
    axios({
      method: 'get',
      url: `https://j7a302.p.ssafy.io/api-gateway/business-api/user/info/${usersSno}`,
      headers: {
        'Authorization': `Bearer a.a.a`
      }
    })
      .then((res) => {
        setUserInfo(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  // console.log('user', userInfo)
  const [totalPrice, setTotalPrice] = useState(infos.map((info)=>{return Number(info[3])}).reduce((a, b)=>a+b, 0))
  
  const REDIRECT_URL = "http://localhost:3000/paymentCheck";

  const subscriptionHistorys = []
  const [subscriptionNo, setSubcriptionNo] = useState(0)
  const subscriptionHistoryNo = 0
  const petSno = 'pfIXrHnfzcKy7zGF1Ha9T'
  useEffect(()=>{
    infos.map((info, idx)=>{
      switch (info[0]) {
        case 'Basic Package':
          setSubcriptionNo(1)
          break
        case 'Play Package':
          setSubcriptionNo(2)
          break
        case 'All In One Package':
          setSubcriptionNo(3)
          break
        case 'DalDal Package':
          setSubcriptionNo(4)
          break
        case 'Toy Package':
          setSubcriptionNo(5)
          break
        case 'Light Package':
          setSubcriptionNo(6)
          break
        default:
          setSubcriptionNo(7)
          break
      }
      subscriptionHistorys.push({
        subscriptionHistoryNo: subscriptionHistoryNo,
        perSno: petSno,
        subscription: {
          subscriptionNo: subscriptionNo,
          name: info[0],
          description: info[1],
          price: totalPrice
        },
        feeds: pickedProducts[idx][0],
        snacks: pickedProducts[idx][1],
        toys: pickedProducts[idx][2],
      })
    })
  }, [])

  const finalData = {
    paymentFlag : "false", //  false=첫결재
    usersSno : "udZ0a32z4Ur2LvGlmEXsN",
    subscriptionHistorys : subscriptionHistorys
  }

  function Purchase(e, infos) {
    console.log(infos)
    e.preventDefault()
    let packageName = ''
    if (infos.length > 1) {
      packageName = `${infos[0][0]}외 ${infos.length-1}개`
    } else {
      packageName = infos[0][0]
    }
    const { IMP } = window;
    IMP.init("imp10157701");
    const data = {
      pg: "kakaopay",
      merchant_uid: userInfo.paymentNo, // 상점에서 관리하는 주문 번호
      name: packageName,
      amount: totalPrice,
      customer_uid: "TCSUBSCRIP",
      buyer_name: userInfo.name,
      buyer_tel: userInfo.phone,
      buyer_addr: userInfo.address,
      buyer_postcode: "",
      m_redirect_url: REDIRECT_URL,
    };
    IMP.request_pay(data, callback);

    axios({
      method: 'post',
      url: `https://j7a302.p.ssafy.io/api-gateway/business-api/payment`,
      headers: {
        'Authorization': `Bearer a.a.a`
      },
      data: finalData
    })
      .then((res)=>{
        console.log(res.data)
        Navigate("/paymentCheck", {state: {
          infos: infos,
          pickedProducts: pickedProducts
        }})
      })
      .catch((err)=>{
        console.log(err.response)
      })
  }

  function callback(response) {
    console.log(response);
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = response;
    if (success) {
      //결제 성공
      alert("결제 성공");
      // Navigate("/paymentCheck", {state: infos})
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };

  const today = new Date()
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  
  function Productinfos(props) {
    const products = props.products
    return <div
      style={{
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column'
      }}>
      {products.map((product, idx)=>{
        return <div style={{display: 'flex'}}>
          {props.i === 0 ? <p style={{width: '30%'}}>사료</p> :
          (props.i === 1 ? <p style={{width: '30%'}}>간식</p> :
          <p style={{width: '30%'}}>장난감</p>)}
          <p style={{width: '40%'}}>{product.name}</p>
          <p style={{width: '30%'}}>{product.materials}</p>
        </div>
      })}
    </div>
  }

  return (
    <div
      style={{
        paddingTop: '7rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <div
        style={{
          width: '70%',
        }}>
        <div  // 페이지 제목
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <h3
            style={{
              marginBottom: '0',
            }}>결제 목록</h3>
        </div>
        <hr style={{ backgroundColor: '#CCAA90' }} />
        {infos.map((info, idx)=>{
          return <div>
            <PackageBox>
              <div style={{width: '80%'}}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <h2>{info[0]} - {info[6]}</h2>
                  <p>월 {info[3]}원</p>
                </div>
                <p>{info[1]}</p>
              </div>
            </PackageBox>
            <div  // 결제 목록
              style={{
                backgroundColor: '#FFFDFB',
                height: '100%',
                borderRadius: '0 0 5px 5px',
                boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)',
                padding: '10px 0 20px 0',
                position: 'relative',
              }}>
              <div style={{margin: '0 20px 0 20px',paddingTop: '20px'}}>
                <div  // 표 제목
                  style={{
                    display: 'flex',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                  <p
                    style={{
                      width: '30%',
                      margin: 'auto'
                    }}>분류</p>
                  <p
                    style={{
                      width: '40%',
                      margin: 'auto'
                    }}>제품명</p>
                  <p
                    style={{
                      width: '30%',
                      margin: 'auto'
                    }}>주 원료 / 소재</p>
                </div>
                <hr style={{ backgroundColor: '#F3CEB2', height: '0.1px' }} />
                {pickedProducts[idx].map((products, idx)=>{
                  return <Productinfos products={products} i={idx} />
                })}
              </div>
            </div>
          </ div>
        })}
        <div  // 결제 금액
          style={{
            display: 'flex',
            flexDirection: 'row-reverse'
          }}>
          <h3>월 {totalPrice}원</h3>
          <h3 style={{ width: '30%' }}>결제 금액 합계</h3>
        </div>
        <div // 구독 정보
         style={{margin: '3rem auto'}}>
          <h3 style={{ marginBottom: '0' }}>구독 목록</h3>
          <hr style={{ backgroundColor: '#CCAA90' }} />
          <table>
            <tr>
              <td width="200px">시작일</td>
              <td>{year}년 {month}월 {date}일</td>
            </tr>
            <tr>
              <td>이름</td>
              <td>{userInfo.name}</td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>{userInfo.phone}</td>
            </tr>
          </table>
        </div>
        <div> {/* 사용자 정보 */}
          <h3
            style={{
              marginBottom: '0',
            }}>배송 정보</h3>
          <hr style={{ backgroundColor: '#CCAA90' }} />
          <table>
            <tr>
              <td width="200px">배송지</td>
              <td>{userInfo.address}</td>
            </tr>
            <tr>
              <td>이름</td>
              <td>{userInfo.name}</td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>{userInfo.phone}</td>
            </tr>
          </table>
          <div style={{ fontSize: '8px', marginTop: '30px' }}>
            <p style={{ margin: 'auto' }}>구매조건 확인 및 결제대행 서비스 약관 동의보기</p>
            <p style={{ margin: 'auto' }}>개인정보 제3자 제공 동의보기</p>
            <p style={{ margin: 'auto' }}>* 개별 판매자가 등록한 마켓플레이스(오픈마켓) 상품에 대한 광고, 상품주문, 배송 및 환불의 의무와 책임은 각 판매자가 부담하고, 이에 대하여 쿠팡은 통신판매중개자로서 통신판매의 당사자가 아니므로 일체 책임을 지지 않습니다.</p>
            <p>위 주문 내용을 확인 하였으며, 회원 본인은 개인정보 이용 및 제공(해외직구의 경우 국외제공) 및 결제에 동의합니다.</p>
          </div>
        </div>
      </div>
      <StyledButton onClick={(e)=>Purchase(e,  infos)} SmallWhite style={{width: '250px', margin: '100px 0 100px 0', fontWeight: '700'}}>결제하기</StyledButton>
      <Footer />
    </div>
  )
}

export default PaymentList