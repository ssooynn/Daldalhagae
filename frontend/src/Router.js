import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SubscribeList from "./pages/SubscribeList";
import SubscribeDetail from "./pages/SubscribeDetail";
import Payment from "./pages/Payment";
import PaymentCheck from "./pages/PaymentCheck";
import PaymentList from "./pages/PaymentList";
import RecommendList from "./pages/RecommendList";
import SignupPet from "./pages/SignupPet";
import SignupUser from "./pages/SignupUser";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/subscribeList" element={<SubscribeList/>}/>
      <Route path="/subscribeDetail" element={<SubscribeDetail/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/paymentCheck" element={<PaymentCheck/>}/>
      <Route path="/paymentList" element={<PaymentList/>}/>
      <Route path="/recommendList" element={<RecommendList/>}/>
      <Route path="/signupPet" element={<SignupPet/>}/>
      <Route path="/signupUser" element={<SignupUser/>}/>
    </Routes>
  
    );
  }
  
export default Router;
  