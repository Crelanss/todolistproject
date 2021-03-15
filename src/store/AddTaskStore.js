import React from 'react'
import {autorun, makeAutoObservable} from "mobx";
import DateStore from "./DateStore";

class AddTaskStore {

    isOpen=false

    constructor() {
        makeAutoObservable(this)
        autorun(()=>{console.log(this.isOpen)
            DateStore.setNewDate()
        })
    }

    changeState(){
        this.isOpen=!this.isOpen
    }
}

export default new AddTaskStore()