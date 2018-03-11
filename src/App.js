import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post/Post';
import Login from './Login/Login';
import Profile from './Profile/Profile';

import {Route, NavLink, BrowserRouter } from 'react-router-dom';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      email: ``,
      username: ``,
      password: ``,
      passwordConf: ``,
      logemail: ``,
      logpassword: ``
    };
  }


  render() {
    return (
    <BrowserRouter>
     <div className="App">
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/profile"> Profile </NavLink>
        <NavLink to ="post/1"> Post </NavLink>
      </div>

      <div>
        <Route exact path="/" component={Login}/>
        <Route path="post/1" component={Post}/>
        <Route path="/profile" component={Profile}/>
      </div>

      </div>
      </BrowserRouter>
    );
  }

}

export default App;
