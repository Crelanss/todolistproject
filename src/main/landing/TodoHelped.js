import React from 'react'
import styled from "styled-components";
import vk from '../../backgroundPictures/vk.svg'
import google from '../../backgroundPictures/google.svg'
import github from '../../backgroundPictures/github.svg'
import facebook from '../../backgroundPictures/facebook.svg'
import apple from '../../backgroundPictures/apple.svg'
import videoBack from '../../backgroundPictures/video-back.png'
import images from '../../backgroundPictures/images.jpg'
import rightArrow from '../../backgroundPictures/right-arrow.svg'

const TodoHelpedComponent = styled.div`
  width:100%;
  max-width: 1200px;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  @media screen and (max-width: 1230px){
    max-width: 1000px;
  }
  @media screen and (max-width: 1027px){
    height: 800px;
  }
  
`
const TodoHelpedContainer = styled.div`
  width: 100%;
  display: flex;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  @media screen and (max-width: 1027px){
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 800px;
    margin-top: 0;
  }
`

const HelpDescription = styled.div`
  width: 50%;
  height: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: Robotos,sans-serif;
  white-space: pre-line;
  @media screen and (max-width: 1230px){
    max-width: 500px;
  }
  @media screen and (max-width: 1027px){
    width:100%;
    text-align: center;
    height: 50%;
  }
  span{
    font-size:20px ;
    font-weight: bolder;
    letter-spacing: 1px;
  }
  em{
    font-size: 3.2rem;
    font-weight: bold;
    @media screen and (max-width: 1230px){
    font-size: 3rem;
  }
  }
`

const Video = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: Robotos, sans-serif;
  padding-top: 20px;
  @media screen and (max-width: 1230px){
    max-width: 500px;
  }
  @media screen and (max-width: 1027px){
    justify-content: center;
    width: 100%;
    height: 50%;
  }
  a{
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    color: #316fea;
    &:hover{
      text-decoration:underline ;
    }
  }
`
const ImageContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content:space-around;
`
const BackVideo=styled.img`
  top: -13%;
  left: 10%;
  width: 110%;
  max-width: 600px;
  position: absolute;
  z-index: 0;
  @media screen and (max-width: 1027px){
    top:3%;
    left:7%
  }
`
const Kaneki=styled.img`
  position: relative;
  z-index: 1;
  width:90%;
  max-width: 600px;
  border: transparent ;
  border-radius: 10px;
  box-shadow:0 0 10px rgba(0,0,0,0.5);
  @media screen and (max-width: 1027px){
    width: 100%;
  }
`
const Icons=styled.img`
  margin-right: 3px;
  position: relative;
  z-index: 1;
`


const TodoHelped = () => {
    return (
        <TodoHelpedComponent>
            <TodoHelpedContainer>
                <HelpDescription>
                    <span>NERV помог <br/>миллионам людей выполнить</span>
                    <em>более 1.5 млрд задач <br/> в 150+ млн проектов.</em>
                    <ImageContainer>
                        <img src={apple} height={55}/>
                        <img src={vk} height={55}/>
                        <img src={google} height={55}/>
                        <img src={facebook} height={55}/>
                        <img src={github} height={55}/>
                    </ImageContainer>
                </HelpDescription>
                <Video>
                    <BackVideo src={videoBack}/>
                    <Kaneki src={images}/>
                    <a href={''}><Icons src={rightArrow}height={15}/>Узнать больше о сообществе NERV</a>
                </Video>
            </TodoHelpedContainer>
        </TodoHelpedComponent>
    )
}

export default TodoHelped