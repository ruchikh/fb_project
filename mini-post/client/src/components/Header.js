import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {loggedOut} from '../actionCreator/action'

class Header extends Component {

	handleLogout = () => {
		console.log("logout")
		this.props.dispatch(loggedOut(suceess => {
			if(suceess){
				this.props.history.push('/signin')
			}
		}))

	}

  render() {
  	const {currentUser} = this.props;
    return (
      <div className="header">
        <h1><Link to="/">MiniPost</Link></h1>
      {
      	
      (!currentUser) ?
      <div>
        <h4><Link to="/signin">SignIn</Link></h4>
        <Link to="/signup"><h4>SignUp</h4></Link>
        </div> : 
        <div>
        	<button onClick={this.handleLogout}>LogOut</button>
        </div>
      }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(Header);