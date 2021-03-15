import React from 'react'
import styled from "styled-components";
import MajorLinks from "./MajorLinks";
import LogReg from "./LogReg";

const NavMenuComponent =styled.div`
  width:100%;
  height:64px;
  display: flex;
  justify-content: space-between;
`

const NavMenu=()=>{
    return(
        <NavMenuComponent>
            <MajorLinks/>
            <LogReg/>
        </NavMenuComponent>
    )
}

export default NavMenu