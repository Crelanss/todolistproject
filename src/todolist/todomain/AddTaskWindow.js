import React from 'react'
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateStore from "../../store/DateStore";
import {observer} from "mobx-react-lite";
import AddTaskStore from "../../store/AddTaskStore";

const AddTaskWindowComponent =styled.div`
  position: absolute;
  z-index:3;
  width:80%;
  height:100px;
  right: 10%;
  top:10%;
  outline: none;
  display: ${props=>props.isOpen ? 'flex':'none'};
  flex-direction: column;
  background: white;
  input{
    outline: none;
    height: 30px;
    font-size: 1rem;
  }
`

const ConfirmRejectContainer=styled.div`
  display: flex;
  width:30%;
  margin-top: 10px;
  align-items: center;
  button{
    font-family: Robotos, sans-serif;
    border: none;
    border-radius: 10px;
    background: #db4c3f;
    height: 25px;
    color:white;
    font-size: 0.9rem;
    &:focus{
      outline: none;
    }
    &:hover{
      cursor: pointer;
    }
  }
  span{
    color:gray;
    margin-left: 10px;
    &:hover{
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

const PickDate=styled.div`
  margin-top: 10px;
  span{
    color:gray;
    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

const AddTaskWindow=observer(()=>{
    return(
        <AddTaskWindowComponent isOpen={AddTaskStore.isOpen}>
            <input/>
            <PickDate>
                <span>Выбрать дату</span>
            </PickDate>
            <DatePicker minDate={new Date()} selected={DateStore.startDate} onChange={date=>DateStore.setStartDate(date)}/>
            <ConfirmRejectContainer>
                <button>Добавить задачу</button>
                <span onClick={()=>AddTaskStore.changeState()}>Отменить</span>
            </ConfirmRejectContainer>
        </AddTaskWindowComponent>
    )
})

export default AddTaskWindow