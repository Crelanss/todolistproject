import React from 'react'
import styled from "styled-components";


const OptionsComponent = styled.div`
  width:30%;
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


const Options = () => {
    return (
        <OptionsComponent>
            <p>ВОЗМОЖНОСТИ</p>
            <a href={''}>Как это работает</a>
            <a href={''}>Премиум</a>
            <a href={''}>Для команд</a>
            <a href={''}>Тарифы</a>
            <a href={''}>Шаблоны</a>
        </OptionsComponent>
    )
}

export default Options