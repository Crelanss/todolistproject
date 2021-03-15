import React from 'react'
import { makeAutoObservable} from "mobx";


class BreadState {
    state = {1:false,
    2:false}

    constructor() {
        makeAutoObservable(this)
    }

    showTheBurger(){
        this.state["1"]=!this.state["1"]
        console.log(this.state["1"])
    }
    showTheResources(){
        this.state["2"]=!this.state["2"]
    }

}

export default new BreadState()