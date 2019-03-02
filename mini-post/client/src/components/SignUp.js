import React, { Component } from 'react';
import {createUser} from '../actionCreator/action';
import {connect} from "react-redux"


class SignUp extends Component {
	state = {
		username: '',
		email: '',
		password: ''	
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = () => {
		console.log("enter in form")
		this.props.dispatch(createUser(this.state))
	}

  render() {
    return (
      <div className="signin-page">
      	<form className="signin-form">
      		<input type="text" name="username" className="login-input" placeholder="Name" onChange={this.handleChange}/>
      		<input type="text" name="email" className="login-input" placeholder="Enter Email" onChange={this.handleChange}/>
      		<input type="password" name="password" className="login-input"  placeholder="Enter Password" onChange={this.handleChange} />
      		<input type="button" className="login-input" value="Submit" onClick={this.handleSubmit}/>
      	</form>
      </div>
    );
  }
}



export default connect()(SignUp);
