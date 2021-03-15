import React from 'react'
import styled from "styled-components";
import Options from "./Options";
import Resources from "./Resources";
import Company from "./Company";

const LinksComponent =styled.div`
  width:70%;
  font-size: 0.9rem;
  max-width: 550px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1000px){
    width:90%;
    max-width: 800px;
    margin-top: 50px;
    
  }
`

const Links=()=>{
    return(
        <LinksComponent>
            <Options/>
            <Resources/>
            <Company/>
        </LinksComponent>
    )
}

export default Links