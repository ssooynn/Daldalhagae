import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SubscribeList from "./pages/SubscribeList";
import SubscribeDetail from "./pages/SubscribeDetail";
import SetCustom from "./pages/SetCustom";
import Payment from "./pages/Payment";
import PaymentCheck from "./pages/PaymentCheck";
import PaymentList from "./pages/PaymentList";
import RecommendList from "./pages/RecommendList";
import ResetRecommentList from "./pages/ResetRecommentList";
import Mypage from "./pages/Mypage/Mypage";
import KakaoSignin from "./pages/KakaoSignin";
import Signup from "./pages/Signup";
import NotFound404 from './pages/NotFound404'

import ReviewList from "./pages/ReviewList";
import { NavBar } from "./components/NavBar";

function Router() {
  const [isNotFound, setIsNotFound] = useState(false)
  return (
    <div>
      {isNotFound ?
      <></>:
      <NavBar />
      }
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/subscribeList" element={<SubscribeList />} />
        <Route path="/subscribeDetail" element={<SubscribeDetail />} />
        <Route path="/setCustom" element={<SetCustom />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentCheck" element={<PaymentCheck />} />
        <Route path="/paymentList" element={<PaymentList />} />
        <Route path="/recommendList" element={<RecommendList />} />
        <Route path="/ResetRecommentList" element={<ResetRecommentList />} />
        <Route path="/signup/*" element={<Signup />} />
        <Route path="/mypage/*" element={<Mypage />} />
        <Route path="/reviewList" element={<ReviewList />} />
        <Route path="/kakaoSignin/*" element={<KakaoSignin />} />
        <Route path="/*" element={<NotFound404 setIsNotFound={setIsNotFound}/>} />
      </Routes>
    </div>
  );
}

export default Router;
