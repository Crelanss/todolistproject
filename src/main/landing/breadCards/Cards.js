import React from 'react'
import styled from "styled-components";
import splash from '../../../backgroundPictures/splash.png'
import rightArrow from '../../../backgroundPictures/right-arrow.svg'

const CardsComponent =styled.div`
  width:100%;
  max-width: 1100px;
  display: flex;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 800px){
    flex-direction: column;
    height: 800px;
  }
`
const CardDescription=styled.div`
  width:40%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: Robotos, sans-serif;
  border-radius:10px;
  box-shadow:0 0 6px rgba(0,0,0,0.3) ; 
  padding: 10px;
  @media screen and (max-width: 800px){
    width:80%;
  }
`

const CardPhoto=styled.div`
  width:50%;
  max-width: 600px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img{
    z-index: 1;
  }
  
`

const DescriptionBracket=styled.div`
  font-family: sans-serif;
  font-size: 64px;
  font-weight: bold;
`

const CardText=styled.div`
  font-size: 22px;
  line-height: 33px;
  margin-top: -15px;
`

const CardBottom=styled.div`
  width: 100%;
  display:flex;
`

const CardAuthors=styled.div`
  width:65%;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  p{
    letter-spacing: 1px;
  }
`
const Link=styled.div`
  width:35%;
  display: flex;
  align-items: flex-end;

  a{
    text-decoration: none;
    color: #316fea;
    &:hover{
      cursor: pointer;
      text-decoration: underline;
    }
  }
  img{
    margin-right: 5px;
  }
`

const Splash=styled.img`
  position: absolute;
  right: 5%;
  width:100%;
  height: 100%;
  z-index: 0;
`


const Cards=(props)=>{
    return(
        <CardsComponent>
            <CardDescription>
                <DescriptionBracket>“</DescriptionBracket>
                <CardText><em> {props.text}</em></CardText>
                <CardBottom>
                    <CardAuthors>
                    <p>{props.p}</p>
                    <span>{props.span}</span>
                    </CardAuthors>
                    <Link>
                        <a href={''}><img src={rightArrow} height={15}/>Узнать больше</a>
                    </Link>
                </CardBottom>
            </CardDescription>
            <CardPhoto>
                <Splash src={splash}/>
                <img src={ props.img} width={250}/>
            </CardPhoto>
        </CardsComponent>
    )
}

export default Cards