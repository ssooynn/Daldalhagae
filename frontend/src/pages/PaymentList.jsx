import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { StyledButton } from '../components/CommonComponent';
import { useLocation, useNavigate } from 'react-router-dom';
import PackageBox from '../components/PackageBox';
import Footer from '../components/Footer';
import axios from 'axios';

const PaymentList = () => {
  const location = useLocation()
  const infos = location.state.infos
  const [pickedProducts, setPickedProducts] = useState(location.state.pickedProducts)
  const Navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([])
  const usersSno = useSelector((state)=>state.user.user.user.usersSno)
  useEffect(() => {
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
  console.log('infos', infos)
  console.log('picked', pickedProducts)

  const [totalPrice, setTotalPrice] = useState(infos.map((info)=>{return Number(info[3])}).reduce((a, b)=>a+b, 0))
  
  const REDIRECT_URL = "http://localhost:3000/paymentCheck";

  const [subscriptionHistorys, setSubscriptionHistorys] = useState([])
  let subscriptionNo = 0
  const subscriptionHistoryNo = 0
  
  useEffect(()=>{
    const copySubscriptionHistorys = [...subscriptionHistorys]
    infos.map((info, idx)=>{
      if (info[0] === 'Basic Package') {
        subscriptionNo = 1
      } else if (info[0] === 'Play Package') {
        subscriptionNo = 2
      } else if (info[0] === 'All In One Package') {
        subscriptionNo = 3
      } else if (info[0] === 'DalDal Package') {
        subscriptionNo = 4
      } else if (info[0] === 'Toy Package') {
        subscriptionNo = 5
      } else if (info[0] === 'Light Package') {
        subscriptionNo = 6
      } else {
        subscriptionNo = 7
      }
      let feeds = []
      let snacks = []
      let toys = []
      pickedProducts[idx].map((types, jdx)=>{
        types.map((product, kdx)=>{
          if (jdx === 0) {
            feeds.push(product.sno)
          } else if (jdx === 1) {
            snacks.push(product.sno)
          } else {
            toys.push(product.sno)
          }
        })
      })
      const temp = {
        subscriptionHistoryNo: subscriptionHistoryNo,
        petSno: info[7],
        subscription: {
          subscriptionNo: subscriptionNo,
          name: info[0],
          description: info[1],
          price: Number(info[3])
        },
        feeds: feeds,
        snacks: snacks,
        toys: toys,
      }
      copySubscriptionHistorys.push(temp)
    })
    setSubscriptionHistorys(copySubscriptionHistorys)
  }, [pickedProducts])

  const finalData = {
    paymentFlag : false, //  false=첫결재
    usersSno : usersSno,
    subscriptionHistorys : subscriptionHistorys
  }

  function Purchase(e, infos) {
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

    console.log(finalData)
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
          return <PackageBox info={info} pickedProducts={pickedProducts} index={idx} setPickedProducts={setPickedProducts}/>
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