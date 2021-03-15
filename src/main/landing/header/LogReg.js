import React from 'react'
import styled from "styled-components";
import '../../../index.css'
import display from "../../../store/BurgerStore";
import {observer} from "mobx-react-lite";
import { useHistory } from 'react-router-dom'

const LogRegComponent =styled.div`
  width:30%;
  height: 64px;
  margin-left:auto;
  font-family: 'Robotos', sans-serif;
  color:#575757;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  span{
    margin:8px;
  }
  @media screen and (max-width: 730px){
    width:50%;
    justify-content:space-around;
    padding-right: 20px;
  }
`
const ElementContainer=styled.div`
  height: 64px;
  border-bottom: transparent solid 2px ;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.2s ease;
  a{
    text-decoration: none;
    color:#575757;
  }
  &:hover{
    border-bottom:#DE3C3C solid 2px ;
    cursor: pointer;
  }
  &:last-child{
    width:50px;
  }
  &:nth-last-child(1){
    display: none;
    @media screen and (max-width: 730px){
    display: flex;
    }
  }
`

const Burger=styled.div`
  width:20px;
  height: 10px;
  position: relative;
  &:before, &:after{
    content:'';
    background-color:black;
    position: absolute;
    width:100%;
    height: 2px;
  }
  &:before{
    top:0;
  }
  &:after{
    bottom:0;
  }
  &:hover{
    cursor: pointer;
  }
`
const BurgerMenu=styled.div`
  position: absolute;
  top:67px;
  display:${props=>props.state? 'block':'none'};
  width: 80%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 1px rgba(0,0,0,0.5);
  right:10%;
  >ul{
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 0;
  padding-left: 0;
  width:100%;
  position: relative;
    >li{
      list-style-type: none;
      width:80%;
      height: 70px;
      display: flex;
      align-items: center;
      border-bottom: #dedede solid 1px;
      justify-content: space-between;
      img{
        width:15px;
      }
      &:nth-last-child(2){
        border-bottom: none;
      }
      &:hover{
        border-bottom:#DE3C3C 1px solid;
        cursor: pointer;
        &:nth-last-child(2){
          border-bottom: none;
        }
      }
    }
  }
`

const HiddenComponent=styled.div`
  display:${props=>props.state? 'block':'none'};
  width:80%;
  height:120px;
  span{
    font-weight: bolder;
  }
  ul{
    height: 100%;
    list-style-type: none;
    line-height: 25px;
    li{
      &:hover{
        cursor: pointer;
      }
    }
  }
`


const LogReg=observer(()=>{
    const {push}=useHistory()
    return(
        <LogRegComponent>
            <BurgerMenu state={display.state["1"]}>
                <ul>
                    <li><span>Возможности</span></li>
                    <li><span>Премиум</span></li>
                    <li><span>Для команд</span></li>
                    <li state={display.state["2"]} onClick={()=>display.showTheResources()}><span>Ресурсы</span><img src={'./pictures/down-arrow.svg'}/></li>
                    <HiddenComponent state={display.state['2']} onClick={()=>display.showTheResources()}>
                        <ul>
                            <li>Шаблоны</li>
                            <li>Гид по началу работы</li>
                            <li>Техники продукнивности + тест</li>
                            <li>Справочный центр</li>
                            <li>Блог</li>
                        </ul>
                    </HiddenComponent>
                </ul>
            </BurgerMenu>
            <ElementContainer onClick={()=>push('/auth/login')}><span>Войти</span></ElementContainer>
            <ElementContainer onClick={()=>push('/auth/registration')}><span>Регистрация</span></ElementContainer>
            <ElementContainer onClick={()=>display.showTheBurger()}><Burger/></ElementContainer>
        </LogRegComponent>
    )
})

export default LogReg