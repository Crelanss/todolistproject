import React from 'react'
import styled from "styled-components";
import tranquility from '../../backgroundPictures/tranquility.png'

const TranquilityComponent =styled.div`
  width:100%;
  background:#fff9f3;
  margin-top: 50px;
  padding-top: 100px;
  @media screen and (max-width: 800px){
    height: 200px;
    padding-top: 20px;
    margin-top: 20px;
    }
`
const TranquilityContent=styled.div`
  width:100%;
  max-width: 1100px;
  display: flex;
  font-family: 'Robotos', sans-serif;
  margin-left: auto;
  margin-right: auto;
`

const TranquilityPicture=styled.div`
  width:50%;
  img{
    width:100%;
  }
  @media screen and (max-width: 800px){
    display: none;
    }
`

const TranquilityText=styled.div`
  padding-left: 50px;
  width:50%;
  max-width:500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 800px){
    padding-left: 0;
    max-width: 800px;
    width:100%;
    align-items: center;
    text-align: center;
    }
`

const VisibleText=styled.h2`
    font-size: 3rem;
    @media screen and (max-width: 900px){
    font-size: 2.5rem;
  }
    @media screen and (max-width: 800px){
    display: none;
    }
`

const HiddenText=styled.h2`
  font-size: 2.5rem;
  display: none;
  @media screen and (max-width: 800px){
    display: block ;
  }
`
const Button = styled.button`
  height: 40px;
  width: 100px;
  background: #e74c3c;
  border: none;
  border-radius: 10px;
  color:white;
  text-align: center;
  font-size: 20px;
  &:focus{
     outline: none;
  }
  &:hover{
    cursor:pointer;
  }
  @media screen and (max-width: 800px){
    display: none ;
  }
`

const HiddenButton = styled.button`
  height: 40px;
  width: 300px;
  background: #e74c3c;
  border: none;
  border-radius: 10px;
  color:white;
  text-align: center;
  font-size: 20px;
  display: none;
  &:focus{
     outline: none;
  }
  &:hover{
    cursor:pointer;
  }
  @media screen and (max-width: 800px){
    display: block ;
  }
`


const Tranquility=()=>{
    return(
        <TranquilityComponent>
            <TranquilityContent>
                <TranquilityPicture>
                    <img src={tranquility}/>
                </TranquilityPicture>
                <TranquilityText>
                    <VisibleText>Обретите<br/>безмятежность<br/> с NERV </VisibleText>
                    <HiddenText>Обретите безмятежность<br/>с NERV </HiddenText>
                    <Button>Начать</Button>
                    <HiddenButton>Загрузить из Microsoft store</HiddenButton>
                </TranquilityText>
            </TranquilityContent>
        </TranquilityComponent>
    )
}

export default Tranquility