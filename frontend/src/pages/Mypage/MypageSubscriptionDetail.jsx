import React from 'react'
import { useLocation } from 'react-router-dom'

const MypageSubscriptionDetail = () => {
  const location = useLocation()
  const subscription = location
  console.log(subscription)

  return (
    <div>MypageSubscriptionDetail</div>
  )
}

export default MypageSubscriptionDetail