import React from 'react'
import styled from "styled-components";
import AddTask from "./AddTask";
import AddTaskWindow from "./AddTaskWindow";

const TodoMainComponent =styled.div`
  width:100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  min-height: 500px;
  box-shadow:0 0 2px rgba(0,0,0,0.2);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-family: Robotos, sans-serif;
  padding: 0 0 50px 50px;
  position:relative;
`

const TasksHeader=styled.h3`
  align-self: center;
`

const TodoMain=()=>{
    return(
        <TodoMainComponent>
            <TasksHeader>Задачи</TasksHeader>
            <AddTask/>
            <AddTaskWindow/>
        </TodoMainComponent>
    )
}

export default TodoMain