import React from 'react'
import styled from "styled-components";
import Navigation from "./Navigation";

const HeaderComponent=styled.header`
  width:100%;
  height:64px;
  background:white ;
  position: fixed;
  z-index: 2;
`

const Header=()=>{
    return(
        <HeaderComponent>
            <Navigation/>
        </HeaderComponent>
    )
}

export default Header