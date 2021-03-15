import React from 'react'
import styled from "styled-components";
import rightArrow from '../../backgroundPictures/right-arrow.svg'
import trust from '../../backgroundPictures/trust.jpg'

const YouCanTrustComponent = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  font-family: Robotos, sans-serif;
  margin-right: auto;
  margin-left: auto;
  margin-top:50px;
`

const YouCanTrustText=styled.div`
  width:50%;
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  h2{
    font-size: 3rem;
    letter-spacing: 0.1rem;
    @media screen and (max-width: 800px){
    font-size: 2.5rem;
  }
  }
  p{
  margin-top: -7px;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 800px){
    width:100%;
    max-width: 500px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
  }
`

const ImageContainer=styled.div`
  width:50%;
  img{
    width:100%;
  }
  @media screen and (max-width: 800px){
    display: none;
  }
`

const QuoteLinks = styled.div`
  width:60%;
  font-family: Robotos,sans-serif;
  a{
    font-size:17px;
    margin:6px;
    text-decoration: none;
    color: #316fea;
    &:hover{
      text-decoration:underline ;
    }
    img{
      margin-right: 3px;
    }
  }
  
`

const YouCanTrust = () => {
    return (
        <YouCanTrustComponent>
            <YouCanTrustText>
                <h2>Таск-менеджер, <br/>которому можно довериться</h2>
                <p>За те 14 лет и 29 дней, что мы занимаемся NERV, нам ни разу не приходила мысль продать его или войти в состав другой компании.</p>
                <p>Наша команда намерена сохранять независимость и работать на ваше доверие, пока вам нужны наши приложения.</p>
                <QuoteLinks>
                    <a href={''}><img src={rightArrow}height={15}/>Узнать о функциях NERV</a>
                </QuoteLinks>
            </YouCanTrustText>
            <ImageContainer>
            <img src={trust}/>
            </ImageContainer>
        </YouCanTrustComponent>
    )
}

export default YouCanTrust