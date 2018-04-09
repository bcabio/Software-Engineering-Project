import React, { Component } from 'react';
import {Route, NavLink, BrowserRouter } from 'react-router-dom';

import SubmitPost from './SubmitPost/SubmitPost';
import Profile from './Profile/Profile';
import Logout from './Logout/Logout';
import Login from './Login/Login';
import Post from './Post/Post';
import Feed from './Feed/Feed';

import logo from './logo.svg';
import './App.css';

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
        <NavLink to="/">Home</NavLink> | 
        <NavLink to="/profile">Profile</NavLink> | 
        <NavLink to="/posts">Feed</NavLink> | 
        <NavLink to="/post/1">Post</NavLink> | 
        <NavLink to="/submit">Submit</NavLink>
      </div>

      <div>
        <Route exact path="/" component={Login}/>
        <Route path="/submit" component={SubmitPost}/>
        <Route path="/post/:id" component={Post}/>
        <Route path="/posts" component={Feed}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/logout" component={Logout}/>

      </div>

      </div>
      </BrowserRouter>
    );
  }

}

export default App;
