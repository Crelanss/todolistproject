import React from 'react'
import styled from "styled-components";

const CompanyComponent =styled.div`
  width:20%;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  font-family: Robotos, sans-serif;

  p{
    margin-top: 0;
    font-size: 0.8rem;
    color:gray;
  }
  a{
    line-height: 40px;
    text-decoration: none;
    color:black;
    &:hover{
      text-decoration: underline;
    }
  }
`

const Company=()=>{
    return(
        <CompanyComponent>
            <p>КОМПАНИЯ</p>
            <a href={''}>О нас</a>
            <a href={''}>Вакансии</a>
            <a href={''}>Блог</a>
            <a href={''}>Пресса</a>
            <a href={''}>Twist</a>

        </CompanyComponent>
    )
}

export default Company