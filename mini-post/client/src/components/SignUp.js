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
      	<form>
      		<input type="text" name="username" placeholder="Name" onChange={this.handleChange}/>
      		<input type="text" name="email" placeholder="Enter Email" onChange={this.handleChange}/>
      		<input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
      		<input type="button" value="Submit" onClick={this.handleSubmit}/>
      	</form>
      </div>
    );
  }
}



export default connect()(SignUp);
