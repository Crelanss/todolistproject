import React from 'react'
import styled from "styled-components";
import Links from "./links/Links";
import vk from '../../../backgroundPictures/vk.svg'
import github from '../../../backgroundPictures/github.svg'
import google from '../../../backgroundPictures/google.svg'
import home from '../../../backgroundPictures/home.svg'

const FooterWrapper = styled.div`
  width:100%;
  height:300px;
  background:#fff9f3;
  padding-top: 100px;
  font-family: Robotos, sans-serif;
`

const FooterComponent = styled.div`
  justify-content: space-between;
  width:100%;
  max-width: 1100px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position:relative;
  padding: 20px;
  @media screen and (max-width: 1000px){
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`

const Line = styled.div`
  position: absolute;
  width:100%;
  height: 1px;
  background: gray;
  top:-10%;
  opacity: 0.6;
`

const Connect=styled.div`
  font-size: 1rem;
  max-width:350px;
  width:30%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  img{
    width:30px;
  }
  @media screen and (max-width: 1000px){
    width: 90%;
    max-width: 800px;
  }
`
const ImageContainer=styled.div`
  display:flex;
  width:50%;
  img{
    margin-right: 15px;
  }
`


const Footer = () => {
    return (
        <FooterWrapper>
            <FooterComponent>
                <Line/>
                <Connect>
                    <img src={home}/>
                    <p>Присоединяйтесь к миллионам людей, которые организуют жизнь и работу с помощью NERV.</p>
                    <ImageContainer>
                        <a href={''}><img src={vk}/></a>
                        <a href={''}><img src={github}/></a>
                        <a href={''}><img src={google}/></a>
                    </ImageContainer>
                </Connect>
                <Links/>
            </FooterComponent>
        </FooterWrapper>
    )
}

export default Footer