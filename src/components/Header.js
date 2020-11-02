import React from 'react'
import {NavLink} from 'react-router-dom'
import {Row, Col, Button} from 'antd'
import styled from 'styled-components'

import svg from 'logo.svg'
console.log(svg)


const StyledRow = styled(Row)`
  background: #343A40;
`

const Nav = styled.nav`
  border: 1px solid red;
  text-align: center;
`

const Header = () => {
  return (
    <StyledRow>
      <Col span={1} offset={3}>
        <img src={svg} alt=""/>
      </Col>
      <Col span={14}>
        <Nav>
          <NavLink to='/' exact>首页</NavLink>
          <NavLink to='/history'>上传历史</NavLink>
          <NavLink to='/about'>关于我</NavLink>
        </Nav>
      </Col>
      <Col span={3}>
        <Button  style={{ color:"white",background: "#28ABB9", borderColor: "#ccc" }}>登录</Button>
        <Button type="primary">注册</Button>
      </Col>
      <Col span={3}>

      </Col>
    </StyledRow>
  )
}

export default Header