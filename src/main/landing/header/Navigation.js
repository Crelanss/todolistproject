import React from 'react'
import styled from "styled-components";
import NavMenu from "./NavMenu";

const NavigationComponent=styled.nav`
  width: 100%;
  max-width:1100px;
  height:64px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`

const Navigation=()=>{
    return(
        <NavigationComponent>
            <NavMenu/>
        </NavigationComponent>
    )
}

export default Navigation