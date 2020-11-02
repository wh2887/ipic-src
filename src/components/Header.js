import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink to='/' exact>首页</NavLink>
      <NavLink to='/history'>上传历史</NavLink>
      <NavLink to='/about'>关于我</NavLink>
    </nav>
  )
}

export default Header