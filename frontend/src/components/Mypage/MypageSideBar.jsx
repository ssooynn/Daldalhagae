import React from 'react'
import { NavLink } from 'react-router-dom'

const MypageSideBar = () => {
  // style
  const sideBarBox = {
    boxSizing:'border-box',
    width: '20%',
    minWidth: '200px',
    padding: '2.2rem',
    border:'0.5px solid #D3D3D3'
  }

  const menuTitle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
    fontSize:'20px',
    fontWeight: '500',
    color: '#564B43',
    textAlign:'left',
    margin: '0 0 0.8rem'
    // margin: [margin-top] [margin-right] [margin-bottom] [margin-left];
  }

  const subMenuList = {
    margin: '0 0 1rem',
    width:'80%',
    display:'flex',
    flexDirection: 'column',
    alignItems:'start',
    marginLeft: 'auto'
  }

  const subMenuTitle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
    fontSize:'14px',
    textDecoration: 'none',
    color: '#1f1d1d',
    margin: '0.7em 0'
  }

  const menus = [
    {
      title: '구독 내역',
      subMenus: [
        {name: '진행 중인 구독', path: '/mypage'},
        {name: '전체 구독', path: '/mypage/subscriptions'}
      ]
    },
    {
      title: '후기',
      subMenus: [
        {name: '미작성 후기', path: '/mypage/unwrittenReviews'},
        {name: '내가 작성한 후기', path: '/mypage/reviews'}
      ]
    },
    {
      title: '회원정보',
      subMenus: [
        {name: '개인 정보 관리', path: '/mypage/unwrittenReviews'},
        {name: '반려견 정보', path: '/mypage/pet'}
      ]
    },


  ]
  return (
    <div style={sideBarBox}>
      {menus.map((menu, idx)=> {
        return (
          <div id={idx}>
            <p style={menuTitle}>{menu.title}</p>
            <div style={subMenuList}>
              {menu.subMenus.map((subMenu, index)=>{
                return(
                    <NavLink to={subMenu.path} style={subMenuTitle} id={index}>{subMenu.name}</NavLink>
                )
              })}
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default MypageSideBar