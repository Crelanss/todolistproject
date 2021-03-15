import React from 'react'
import { makeAutoObservable} from "mobx";


class DateStore {
    startDate=new Date();

    constructor() {
        makeAutoObservable(this)
    }

    setStartDate(NewStartDate){
        this.startDate=NewStartDate;
    }

    setNewDate(){
        this.startDate=new Date()
    }

}

export default new DateStore()