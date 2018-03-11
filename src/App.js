import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p> awefpoiajsd;lfkqjwpeofijas;dflkqjwpeofija;sdlkfjqwpeoifja;lsdkjf </p>
        <form action="/" method="post">
            <input type="text" name="email" placeholder="E-mail" required="">
            <input type="text" name="username" placeholder="Username" required="">
            <input type="password" name="password" placeholder="Password" required="">
            <input type="password" name="passwordConf" placeholder="Confirm Password" required="">
            <input type="submit" value="REGISTER">
          </form>
      </div>
    );
  }
}

export default App;
