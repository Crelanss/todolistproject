import React from 'react'
import styled from "styled-components";
import '../../../index.css'
import FallMenu from "./FallMenu";
import style from '../../../store/HeaderStore'
import checklist from '../../../backgroundPictures/checklist.svg'
import downArrow from '../../../backgroundPictures/down-arrow.svg'

const MajorLinksComponent = styled.div`
  width:500px;
  height:64px;
  font-family: 'Robotos', sans-serif;
  color:#575757;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ul{
  list-style: none;
  }
  @media screen and (max-width: 730px){
    justify-content: flex-start;
    width: 10%;
  }
  img{
    @media screen and (max-width: 730px){
    margin-left: 13px;
  }
  }
  
`
const ElementContainer = styled.div`
  height: 64px;
  border-bottom: transparent solid 2px ;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.2s ease;
  &:hover{
    border-bottom:#DE3C3C solid 2px ;
    cursor: pointer;
  }
  span{
    margin-right: 5px;
  }
  @media screen and (max-width: 730px){
    display: none;
  }
`



const MajorLinks = () => {
    return (
        <MajorLinksComponent>
            <img src={checklist} height={45}/>
            <ElementContainer><a>Возможности</a></ElementContainer>
            <ElementContainer><a>Премиум</a></ElementContainer>
            <ElementContainer><a>Для команд</a></ElementContainer>
            <ElementContainer onClick={()=>style.ShowTheMenu()}>
                <span>Ресурсы</span>
                <img src={downArrow} height={10}/>
                <FallMenu/>
            </ElementContainer>
        </MajorLinksComponent>
    )
}

export default MajorLinks