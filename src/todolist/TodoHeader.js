import React from 'react'
import styled from "styled-components";
import {useHistory} from 'react-router-dom'

const TodoHeaderComponent =styled.div`
  width:100%;
  height:35px;
  background:#db4c3f;
  display: flex;
  align-items: center;
  span{
    font-size: 1rem;
    font-family: Robotos, sans-serif;
    margin-right: auto;
    margin-left: auto;
    color:white;
    font-weight: bold;
    letter-spacing: 10px;
    &:hover{
      cursor: pointer;
    }
  }
`


const TodoHeader=()=>{
    const {push}=useHistory()
    return(
        <TodoHeaderComponent>
            <span onClick={()=>push('/')}>NERV</span>
        </TodoHeaderComponent>
    )
}

export default TodoHeader