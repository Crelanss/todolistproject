import React from 'react'
import styled from "styled-components";
import geo3 from '../../backgroundPictures/geo3.png'
import evangelion from '../../backgroundPictures/evangelion.png'
import todoPicture from '../../backgroundPictures/todo-picture.png'
import { useHistory } from 'react-router-dom'

const PictureComponentWrapper = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  
`

const PictureHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width:100%;
  position: relative;
  z-index: 1;
`

const Button = styled.button`
  top:5%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  width: 100px;
  background: #e74c3c;
  border: none;
  border-radius: 10px;
  color:white;
  font-family: 'Robotos', sans-serif;
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  z-index: 2;
  &:focus{
     outline: none;
  }
  &:hover{
    cursor:pointer;
  }
  @media screen and (max-width: 800px){
    top:-13%;
  }
`

const Image = styled.img`
  width:90%;
  height:auto;
  max-width: 1300px;
  max-height: 900px;
  position: relative;
  z-index: 1;
`
const BackPic = styled.img`
  top: 10%;
  right:0;
  height: auto;
  width: 100%;
  max-width:1900px;
  position: absolute;
  z-index: 0;
`


const Picture = () => {
    const {push} = useHistory()
    return (
        <PictureComponentWrapper>
            <PictureHolder>  <Button onClick={()=>push('/auth/registration')}>Начать</Button> <Image src={evangelion}/></PictureHolder>
            <PictureHolder>  <BackPic src={geo3}/><Image src={todoPicture}/></PictureHolder>
        </PictureComponentWrapper>
    )
}

export default Picture