import React from 'react'
import styled from "styled-components";
import google from '../backgroundPictures/google.svg'
import vk from '../backgroundPictures/vk.svg'
import facebook from '../backgroundPictures/facebook.svg'
import checklist from '../backgroundPictures/checklist.svg'
import {useHistory} from "react-router-dom";

const RegistrationComponent =styled.div`
  width:400px;
  height:580px;
  background: white;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding:15px;
  display: flex;
  flex-direction: column;
  font-family: Robotos, sans-serif;
  @media screen and (max-width: 746px){
    margin-top: 20px;
  }
`

const ImageContainer=styled.div`
  width:22%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    width:30px;
  }
  span{
    font-size: 1.2rem;
  }
`

const ContinueWith=styled.div`
  width:90%;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 12px;
  height: 35px;
  &:nth-last-child(1){
    margin-top: 0px;
  }
  img{
    width:17px;
    margin-right: 5px;
  }
  span{
    font-size: 0.9rem;
  }
  &:hover{
    cursor: pointer;
    background:#ddd;
    border: 1px solid gray;
  }
`

const Separator=styled.div`
  width:90%;
  align-self: center;
  margin-top:20px;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    color:gray;
    margin-right: 5px;
    margin-left: 5px;
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
`

const SeparateLine=styled.div`
  width:45%;
  background: #ddd;
  height: 1px;
`

const InputContainer=styled.div`
  width:90%;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  &:nth-last-child(7){
    margin-top: 15px;
  }
  span{
    margin-bottom: 5px;
    font-size: 0.9rem;
    letter-spacing: 1.5px;
    font-weight: bolder;
  }
  input{
    height: 35px;
    align-items: center;
    display: flex;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding-left: 5px;
    &:focus{
      border:2px solid gray;
    }
  }
`

const RegistrationButton=styled.div`
  width:90%;
  height: 30px;
  font-size: 0.9rem;
  margin-top: 10px;
  background:#db4c3f;
  border: none;
  border-radius: 5px;
  color:white;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus{
    background: none;
  }
  &:hover{
    cursor: pointer;
  }
`

const ForgetThePass=styled.div`
  width:90%;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  span{
    color:gray;
    font-size: 0.8rem;
  }
  a{
    color:#db4c3f;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
`

const SecondSeparateLine=styled.div`
  width:90%;
  align-self: center;
  height: 1px;
  background: #ddd;
  margin-top: 20px;
`

const AlreadyRegistered=styled.div`
  margin-top: 30px;
  width:100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 0.8rem;
  span{
   margin-right: 5px;
  }
  a{
    text-decoration: none;
    color:#db4c3f;
    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`


const Registration=()=>{
    const {push}=useHistory()
    return(
        <RegistrationComponent>
            <ImageContainer><img src={checklist}/><span>NERV</span></ImageContainer>
            <h2>Регистрация</h2>
            <ContinueWith><img src={google}/><span>Продолжить через Google</span></ContinueWith>
            <ContinueWith><img src={vk}/><span>Продолжить через ВКонтакте</span></ContinueWith>
            <ContinueWith><img src={facebook}/><span>Продолжить через Facebook</span></ContinueWith>
            <Separator><SeparateLine/><span>ИЛИ</span><SeparateLine/></Separator>
            <InputContainer><span>Email</span><input/></InputContainer>
            <RegistrationButton>Регистрация через Email</RegistrationButton>
            <ForgetThePass><span>Продолжая с использованием аккаунта Google, Apple или Email,
                вы соглашаетесь с <a href={''}>Условиями использования</a> и <a href={''}>Политикой конфиденциальности</a> NERV. </span></ForgetThePass>
            <SecondSeparateLine/>
            <AlreadyRegistered ><span>Уже зарегистрированы?</span><a onClick={()=>push('/auth/login')}>Войти в систему</a></AlreadyRegistered>
        </RegistrationComponent>
    )
}

export default Registration