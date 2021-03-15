import React from 'react'
import styled from "styled-components";
import Login from "./Login";
import Registration from "./Registration";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import TodoList from "../todolist/TodoList";

const AuthorisationComponent =styled.div`

`

const Authorisation=()=>{
    return(
            <AuthorisationComponent>
                <Switch>
                    <Route path='/auth/login' exact component={Login}/>
                    <Route path='/auth/registration' exact component={Registration}/>
                </Switch>
            </AuthorisationComponent>
    )
}

export default Authorisation