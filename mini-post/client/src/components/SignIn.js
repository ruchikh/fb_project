import React, { Component } from 'react';
import {connect} from "react-redux";
import {loginUser} from '../actionCreator/action'


class SignIn extends Component {
	state = {
		username: '',
		password: ''	
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = () => {
		console.log("enter in form")
		this.props.dispatch(loginUser(this.state, (success) => {
			if(success){
				this.props.history.push('/')
			}
		}))
	}



  render() {
  	const {currentUser} = this.props;
    return (
      <div className="sining-page">
      	<form className="signin-form">
      		<input type="text" name="username" className="login-input" placeholder="Enter username" onChange={this.handleChange}/>
      		<input type="password" name="password" className="login-input" placeholder="Enter Password" onChange={this.handleChange} />
      		<input type="button" className="login-input" value="Submit" onClick={this.handleSubmit}/>
      	</form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.curentUser
	}
}


export default connect(mapStateToProps)(SignIn);
