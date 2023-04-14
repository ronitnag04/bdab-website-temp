import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import basic_logo from"../../images/basic_logo.png"

const LogoWrap = styled.div`
  flex: 0 0 150px;
  margin-top: 0px;
  margin-left: 50px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 0 145px;
  }

  @media (max-width: 900px) {
    margin-top: 50px;
  }
`

const LogoImage = styled.img`
  margin-bottom: 0;
`

const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
      <LogoImage src={ basic_logo } alt="logo"/>
    </LogoWrap>
  )
}

export default Logo
