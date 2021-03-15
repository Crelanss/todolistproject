import React from 'react'
import styled from "styled-components";
import style from "../../../store/HeaderStore";
import {observer} from "mobx-react-lite";

const FallMenuComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  border:1px #dddfe6 solid;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 1px rgba(0,0,0,0.5);
  top:67px;
  margin-left:250px;
  width:350px;
  height:480px;
  transition: all 0.2s ease-out;
  visibility:${props=>props.style.visibility};
  opacity: ${props=>props.style.opacity};
  ul{
  list-style: none;
    li{
      list-style-type: none;
    } 
  }
  
`
const TextContainer = styled.div`
  width:280px;
  height:120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: #dddfe6 1px solid;
  &:last-child{
  border-bottom: none;
  }
`
const HeaderText = styled.span`
font-size: 18px;
`
const CommonText = styled.span`
margin-top: 10px;
font-size: 15px;
`

const FallMenu = observer(() => {
    return (
        <FallMenuComponent style={{visibility:style.styles.visibility, opacity:style.styles.opacity}}>
            <TextContainer>
                <HeaderText>Шаблоны</HeaderText>
                <CommonText>Начните свой следующий проект с шаблонами NERV на любой случай</CommonText>
            </TextContainer>
            <TextContainer>
                <HeaderText>Гид по началу работы</HeaderText>
                <CommonText>Все, что нужно знать для быстрого старта в NERV</CommonText>
            </TextContainer>
            <TextContainer>
                <HeaderText>Техники продуктивности+ Тест</HeaderText>
                <CommonText>Узнайте о самых популярных техниках продуктивности и найдите те, которые вам подходят</CommonText>
            </TextContainer>
            <TextContainer>
                <HeaderText>Справочный центр</HeaderText>
                <CommonText>Найдите ответы на свои вопросы, а также советы о том, как взять от NERV максимум</CommonText>
            </TextContainer>
        </FallMenuComponent>
    )
})

export default FallMenu