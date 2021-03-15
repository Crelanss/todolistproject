import React from 'react'
import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoMain from "./todomain/TodoMain";

const TodoListComponent =styled.div`
  
`


const TodoList=()=>{
    return(
        <TodoListComponent>
            <TodoHeader/>
            <TodoMain/>
        </TodoListComponent>
    )
}

export default TodoList