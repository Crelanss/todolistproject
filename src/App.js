import React from 'react'
import styled from "styled-components";
import LandingPage from "./main/Main";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Authorisation from "./authorisation/Authorisation";
import TodoList from "./todolist/TodoList";

const AppComponent=styled.div`
  display: flex;
  flex-direction: column;
  background:white;
  width:100%;
  height: 100vh;
`

function App() {
  return (
      <Router>
          <AppComponent>
              <Switch>
                  <Route path='/' exact component={LandingPage}/>
                  <Route path='/auth' component={Authorisation}/>
                  <Route path='/todolist' component={TodoList}/>
              </Switch>
          </AppComponent>
      </Router>

  );
}

export default App;
