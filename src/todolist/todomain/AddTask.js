import React from 'react'
import styled from "styled-components";
import plus from '../../backgroundPictures/plus.svg'
import AddTaskStore from "../../store/AddTaskStore";

const AddTaskComponent =styled.div`
  width:170px;
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: space-around;
  margin-left: 68px;
  img{
    width: 15px;
    border: 1px solid transparent;
    border-radius: 10px;
   
  }
  span{
    color:gray;
  }
  &:hover{
    cursor: pointer;
    img{
      background: #db4c3f;
    }
      color:#db4c3f;
  }
`


const AddTask=()=>{
    return(
        <AddTaskComponent onClick={()=>AddTaskStore.changeState()}>
            <img src={plus}/>
            <span >Добавить задачу</span>
        </AddTaskComponent>
    )
}

export default AddTask