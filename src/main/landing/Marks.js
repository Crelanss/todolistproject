import React from 'react'
import styled from "styled-components";
import geometry from '../../backgroundPictures/geometry.png'

const MarksComponent = styled.div`
  height: 500px;
  width:100%;
  position: relative;
  display:flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 900px){
    height: 600px;
  }
`
const PaintLine = styled.div`
  top: 5%;
  width: 100%;
  height: 90%;
  position: absolute;
  z-index: 0;
  opacity: 75%;
  background-image: url(${geometry});
  background-size: cover;
  background-position: 50%;
  @media screen and (max-width: 900px){
    background: linear-gradient(29deg, #FAA647 0%, #F476B4 100%);;
  }
`

const ReviewComponent = styled.div`
  display: flex;
  justify-content: space-around;
  width:90%;
  max-width:1300px;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width:900px){
    flex-direction: column;
  }
`

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:20%;
  margin: 10px;
  font-family: Robotos,sans-serif;
  justify-content: space-around;
  white-space: pre-line;
  text-align: center;
  span{
    margin-top: 10px;
  }
  @media screen and (max-width: 900px){
    width: 300px;
  }
`


const Marks = () => {
    return (
        <MarksComponent>
            <PaintLine/>
            <ReviewComponent>
                <ReviewContainer>
                    <span>Google play</span>
                    <span>★★★★★</span>
                    <h2>Выбор редакции рейтинг 4.7, 187+тыс. отзывов</h2>
                </ReviewContainer>
                <ReviewContainer>
                    <span>App store</span>
                    <span>★★★★★</span>
                    <h2>Приложение дня рейтинг 4.8, 30+ тыс. отзывов</h2>
                </ReviewContainer>
                <ReviewContainer>
                    <span>The verge</span>
                    <h2>{`9/10 \n "Лучший на сегодня спиок дел в приложении"`}</h2>
                </ReviewContainer>
            </ReviewComponent>
        </MarksComponent>
    )
}

export default Marks