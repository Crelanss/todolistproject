import React from 'react'
import styled from "styled-components";


const ResourcesComponent = styled.div`
  width:40%;
  max-width: 200px;
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


const Resources = () => {
    return (
        <ResourcesComponent>
            <p>РЕСУРСЫ</p>
            <a href={''}>Скачать приложения</a>
            <a href={''}>Справочный центр</a>
            <a href={''}>Техники продуктивности</a>
            <a href={''}>Рассказать друзьям</a>
            <a href={''}>Интеграции</a>
            <a href={''}>Парнтнерская программа</a>
            <a href={''}>API для разработчиков</a>
        </ResourcesComponent>
    )
}

export default Resources