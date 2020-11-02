import React from 'react'
import {NavLink} from 'react-router-dom'
import {Row, Col} from 'antd'
import styled from 'styled-components'

import svg from 'logo.svg'


const StyledRow = styled(Row)`
  background: #343A40;
  display:flex;
  align-items: center;
  font-size: 22px;
`
const StyledImg = styled.img`
  max-width: 64px;
  padding: .3em;
`

const StyledNav = styled.nav`
  text-align: center;
  display:flex;
  justify-content: flex-start;
  color: white;
  > a{
    &:hover{color: #ccc}
    &:active{color: #bbbfca}
  }
`
const StyledNavLink = styled(NavLink)`
  margin-left: 3em;
  border-bottom: 1px solid transparent;
  padding-bottom: .2em;
  &.active{
  border-bottom: 1px solid #bbbfca;
  }
`

const StyledButtons = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
`

const StyledButton = styled.button`
  margin: 0 .2em;
  padding: .5em 1em;
  font-size: 16px;
  text-align: center;
  color: white;
  display:flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  background: #28ABB9;
  border-radius: 4px;
  &:hover{
  background: rgba(40,171,185,.8);
  }
  &:active{
  background: rgba(40,171,185,.6);
  }
`

const Header = () => {
  return (
    <StyledRow>
      <Col span={1} offset={3}>
        <StyledImg src={svg} alt=""/>
      </Col>
      <Col span={14}>
        <StyledNav>
          <StyledNavLink to='/' exact activeClassName="active">首页</StyledNavLink>
          <StyledNavLink to='/history'>上传历史</StyledNavLink>
          <StyledNavLink to='/about'>关于我</StyledNavLink>
        </StyledNav>
      </Col>
      <Col span={3}>
        <StyledButtons>
          <StyledButton>登录</StyledButton>
          <StyledButton>注册</StyledButton>
        </StyledButtons>
      </Col>
      <Col span={3}>

      </Col>
    </StyledRow>
  )
}

export default Header