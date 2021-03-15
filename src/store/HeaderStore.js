import React from 'react'
import {makeAutoObservable} from "mobx";

class State {
    styles = {
        visibility: 'hidden',
        opacity: '0'
    }

    constructor() {
        makeAutoObservable(this)
    }
    ShowTheMenu(){
        if(this.styles.visibility==='hidden'){
            this.styles.visibility='visible'
        }else{this.styles.visibility='hidden'}
        if(this.styles.opacity==='0'){
            this.styles.opacity='1'
        }else{this.styles.opacity='0'}
        console.log(this.styles.opacity, this.styles.visibility)
    }
}

export default new State()