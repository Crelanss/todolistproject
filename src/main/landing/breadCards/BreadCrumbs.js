import React from 'react'
import styled from "styled-components";
import breadState from '../../../store/BreadCrumbsStore'
import {observer} from 'mobx-react-lite'

const BreadCrumbsComponent = styled.div`
  width:800px;
  justify-content: center;
  height: 70px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  @media screen and (max-width: 800px){
    width:400px;
    flex-wrap: wrap; 
    height: 100px;
  }
`
const Line = styled.div`
  position: absolute;
  width:95%;
  height:2px;
  background: gray;
  z-index: 0;
  @media screen and (max-width: 800px){
    width: 90%;
  }
`
const LineTwo = styled.div`
  position: absolute;
  top:52%;
  opacity: 0;
  visibility: hidden;
  width:95%;
  height:2px;
  background: gray;
  z-index: 0;
  @media screen and (max-width: 800px){
    opacity: 1;
    visibility: visible;
  }
`

const Crumb = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  height:100%;
  border-top: ${props => props.state ? '2px solid #DE3C3C' : '2px solid transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 800px){
    height:50%;
  }
`


const BreadCrumbs = observer(() => {
    return (
        <BreadCrumbsComponent>
            <Line/>
            <LineTwo/>
            <Crumb state={breadState.state["1"]} onClick={() => breadState.clickHandler(1)}><span>Креативная сфера</span></Crumb>
            <Crumb state={breadState.state["2"]} onClick={() => breadState.clickHandler(2)}><span>Разработчики</span></Crumb>
            <Crumb state={breadState.state["3"]} onClick={() => breadState.clickHandler(3)}><span>Студенты</span></Crumb>
            <Crumb state={breadState.state["4"]} onClick={() => breadState.clickHandler(4)}><span>Малый бизнес</span></Crumb>
            <Crumb state={breadState.state["5"]} onClick={() => breadState.clickHandler(5)}><span>Предприниматели</span></Crumb>
            <Crumb state={breadState.state["6"]} onClick={() => breadState.clickHandler(6)}><span>Фрилансеры</span></Crumb>
        </BreadCrumbsComponent>
    )
})

export default BreadCrumbs