import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SubscribeList from "./pages/SubscribeList";
import SubscribeDetail from "./pages/SubscribeDetail";
import Payment from "./pages/Payment";
import PaymentCheck from "./pages/PaymentCheck";
import PaymentList from "./pages/PaymentList";
import RecommendList from "./pages/RecommendList";
import Mypage from "./pages/Mypage/Mypage";
import KakaoSignin from "./pages/KakaoSignin";
import Signup from "./pages/Signup";
import SignupTerm from "./pages/SignupTerm";
import SignupUser from "./pages/SignupUser";
import SignupPet from "./pages/SignupPet";

import ReviewList from "./pages/ReviewList";
import { NavBar } from "./components/NavBar";

function Router() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/subscribeList" element={<SubscribeList />} />
        <Route path="/subscribeDetail" element={<SubscribeDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentCheck" element={<PaymentCheck />} />
        <Route path="/paymentList" element={<PaymentList />} />
        <Route path="/recommendList" element={<RecommendList />} />
        <Route path="/signup/*" element={<Signup />} />
        <Route path="/mypage/*" element={<Mypage />} />
        <Route path="/reviewList" element={<ReviewList />} />
        <Route path="/kakaoSignin/*" element={<KakaoSignin />} />
      </Routes>
    </div>
  );
}

export default Router;
