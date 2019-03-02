import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSingleArticle, deletePost, addComment, isLoggedIn} from '../actionCreator/action';
import {Link} from 'react-router-dom';

class Articles extends Component {
		state = {
			value: '',
		}


	handleChange = (e) => {
		this.setState({
		value: e.target.value
			
		})
	}

	handleSubmit = () => {
		const postId = this.props.match.params.id
		this.props.dispatch(addComment(this.state, postId))
		
	}


	handleEdit = () => {
		// this.props.dispatch(editPost())
	}

	handleDelete = (id) => {
		this.props.dispatch(deletePost(id, (suceed) =>{
			if(suceed){
				this.props.history.push('/')
			}
		}));

	}

	componentDidMount(){
		const postId = this.props.match.params.id;
	 	this.props.dispatch(getSingleArticle(postId))
		this.props.dispatch(isLoggedIn())
	}


  render() {
  	const {article, currentUser} = this.props;

    return (
      <div className="home-page">
      	<div>
      		<h1>{article.title}</h1>
      		<p>{article.description}</p>
      		<div>
      		{
      			(currentUser.username) ?
      			(
      			<div className="buttons">
      				<button onClick={this.handleClick}>Edit</button>
      				<button onClick={() => {this.handleDelete(article._id)}}>Delete</button>
      			</div>) : <div></div>
      			
      		}
      		</div>
      	</div>
      	<div>
	      	{
	      		(currentUser.username) ?
		      	(<form>
		      		<textarea cols="30" rows="3" onChange={this.handleChange} placeholder="comment..." />
		      		<input type="button" value="Submit" />
		      	</form>) : null
	      	}
      	</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		article: state.SingleArticle,
		currentUser: state.currentUser
	}
}


export default connect(mapStateToProps)(Articles);
