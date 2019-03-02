import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addArticle, getAllArticle, isLoggedIn} from '../actionCreator/action';
import {Link} from 'react-router-dom';

class Articles extends Component {
		state = {
			title: '',
			description: ''
		}


	handleChange = (e) => {
		this.setState({
		[e.target.name]: e.target.value
			
		})
	}

	handleSubmit = () => {
		this.props.dispatch(addArticle(this.state, (succeed) => {
			if(succeed){
			this.props.dispatch(getAllArticle())
			}
		}));
	}

	componentDidMount(){
		this.props.dispatch(getAllArticle());
		this.props.dispatch(isLoggedIn())
	}


  render() {
  	const {articles} = this.props;
  	const {currentUser} = this.props;
    return (
    	<div className="main-homepage">
	      <div className="home-page">
		      {
		      	(currentUser.username) ?
		      	(
		      	<form onSubmit={this.handleChange}>
		      		<input type="text" name="title" className="title" placeholder="Title" onChange={this.handleChange} />
		      		<textarea name="description" cols="70" rows="10" className="description" placeholder="write story" onChange={this.handleChange} />
		      		<input type="button" className="submit-btn" value="Submit" onClick={this.handleSubmit}/>
		      	</form>) : null


		      }

		      	<h2>List of Posts</h2>
		      	<div className="blog-title">
		      		{
		      			articles && articles.map(article =>
		      			<div>
		      				<Link to={`article/${article._id}`}><h1>{article.title}</h1></Link>
		      			</div> 
		      			)
		      		}
		      	</div> 
	      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		articles: state.allArticles,
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(Articles);
