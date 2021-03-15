import React from 'react'
import {autorun, makeAutoObservable, reaction} from "mobx";


class BreadState {
    state = {
        1: true,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
    }

    constructor() {
        makeAutoObservable(this)
    }

    clickHandler(number) {
        for (let key in this.state){
            if(this.state[key]===true){
                this.state[key]=false
            }
        }
        this.state[number] = !this.state[number]
    }
}

export default new BreadState()