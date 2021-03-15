import React from 'react'
import styled from "styled-components";


const SpaceWrapper = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
width:100%;
height:300px;
`

const HeaderTextComponent = styled.div`
  width:95%;
  height:200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: calc(15px + 1.5vw );
  font-optical-sizing: auto;
  font-family: 'Robotos', sans-serif;
  h1{
    white-space: pre-line;
  }
`

const HeaderText = () => {
    return (
        <SpaceWrapper>
            <HeaderTextComponent>
                <h1>{`Getting things done  with\n NERV`}</h1>
            </HeaderTextComponent>
        </SpaceWrapper>
    )
}

export default HeaderText