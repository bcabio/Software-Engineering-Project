import React, { Component } from 'react';

class Login extends Component {

	  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      email: ``,
      username: ``,
      password: ``,
      passwordConf: ``,
      logemail: ``,
      logpassword: ``, 
      response: null
    };
  }

	  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  handleLogin(e) {
    fetch('localhost:3000/login', {
      method: 'post',
      body: JSON.stringify({
        logemail: this.state.logemail,
        logpassword: this.state.logpassword
      })
    })
  }

  handleRegister(e) {
  	fetch('google.com', {}).then((response) => {
  		console.log(response);
  	})

    fetch('localhost:3000/register', {
      method: 'post',
      body: "email=" + this.state.email + "&username=" + this.state.username + "&password=" + this.state.password + "&passwordConf" + this.state.passwordConf,
  	  headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then((response) => {
    	if (response)
    		console.log(response);
    })
  }


	render() {
		return (
			<div>
			<div>
      <p> Register </p>
        <form onSubmit={this.handleRegister}>
            <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="E-mail" required=""/>
            <input type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Username" required=""/>
            <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" required=""/>
            <input type="password" value={this.state.passwordConf} onChange={this.handleChange} name="passwordConf" placeholder="Confirm Password" required=""/>
            <input type="submit" value="REGISTER"/>
          </form>
      </div>

      <div className="App">
      <p> Log in </p>
        <form onSubmit={this.handleLogin}>
            <input type="text" value={this.state.logemail} onChange={this.handleChange} name="logemail" placeholder="E-mail" required=""/>
            <input type="password" value={this.state.logpassword} onChange={this.handleChange} name="logpassword" placeholder="Password" required=""/>
            <input type="submit" value="LOGIN"/>
          </form>
      </div>
      </div>
      );
	}
}
export default Login;