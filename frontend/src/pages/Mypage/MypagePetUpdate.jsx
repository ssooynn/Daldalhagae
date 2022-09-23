import React from 'react'
import { useLocation } from 'react-router-dom';

const MypagePetUpdate = () => {
  const location = useLocation();
  const Id = location.state?.Id;
  console.log(Id)
  return (
    <div>MypagePetUpdate</div>
  )
}

export default MypagePetUpdate