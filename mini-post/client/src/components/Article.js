import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSingleArticle, deletePost, addComment} from '../actionCreator/action';
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
	 	// this.props.dispatch(getAllComment())
	}


  render() {
  	const {article} = this.props;
    return (
      <div className="home-page">
      	<div>
      		<h1>{article.title}</h1>
      		<p>{article.description}</p>
      		<div>
      			<button onClick={this.handleClick}>Edit</button>
      			<button onClick={() => {this.handleDelete(article._id)}}>Delete</button>
      		</div>
      	</div>

      	<form>
      		<textarea cols="30" rows="3" onChange={this.handleChange} placeholder="comment..." />
      		<input type="button" value="Submit" />
      	</form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		article: state.SingleArticle
	}
}


export default connect(mapStateToProps)(Articles);
