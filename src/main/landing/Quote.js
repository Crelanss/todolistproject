import React from 'react'
import styled from "styled-components";
import rightArrow from '../../backgroundPictures/right-arrow.svg'
import play from '../../backgroundPictures/play.svg'

const QuoteComponent = styled.div`
  text-align: center;
  justify-content: space-between;
  width:100%;
  max-width: 900px;
  height: 200px;
  margin: auto;
  white-space: pre-line;
  h2{
    font-family: Robotos,sans-serif;
    font-size:40px;
  }
`

const SpanContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  max-width: 650px;
  span{
     font-family: Robotos,sans-serif;
     font-size: 18px; 
  }
`

const QuoteLinks = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:60%;
  font-family: Robotos,sans-serif;
  display:flex;
  justify-content: space-around;
  margin-top: 20px;
  flex-wrap: wrap;
  a{
    font-size:17px;
    margin:6px;
    text-decoration: none;
    color: #316fea;
    &:hover{
      text-decoration:underline ;
    }
  }
  
`

const Icons=styled.img`
  margin-right: 3px;
`


const Quote = () => {
    return (
        <QuoteComponent>
            <h2>Разгрузите свой ум</h2>
            <SpanContainer><span>{`Обретите ясность и спокойствие-переместите свои задачи из головы в список дел (неважно, где вы и какое устройство использвуете)`}</span></SpanContainer>
            <QuoteLinks>
                <a href={''}><Icons src={rightArrow}height={15}/>Узнать о функциях NERV</a>
                <a href={''}><Icons src={play}height={15}/>Увидеть NERV в действии</a>
            </QuoteLinks>
        </QuoteComponent>
    )
}

export default Quote