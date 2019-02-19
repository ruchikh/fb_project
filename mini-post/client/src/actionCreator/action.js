const url = 'http://localhost:8000/api'



export function addArticle(data, cb){
	return (dispatch) => {
		fetch(`${url}/article`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(data => {
			dispatch({type: "POST_ARTICLE", data})
			cb(true)
		})
	}
}

export function getAllArticle(){
	return (dispatch) => {
		fetch(`${url}/article`)
		.then(res => res.json())
		.then(data => {
			dispatch({type:"GET_ALL_ARTICLES", data})
		})
		
	}
}

export function getSingleArticle(postId){
	return (dispatch) => {
		fetch(`${url}/article/${postId}`)
		.then(res => res.json())
		.then(data =>{
			dispatch({type:"GET_SINGLE_ARTICLE", data: data})
		})
	}
}


export function deletePost(id, cb){
	return (dispatch) => {
		fetch(`${url}/article/${id}`, {
			method:"DELETE",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({id})
		}).then(res => res.json()).then(data => {
			dispatch({type:"GET_ALL_ARTICLES", data})
			cb(true)
		});
	}	
}

export function addComment(data, postId){
	return (dispatch) => {
		fetch(`${url}/article/${postId}/comment`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => res.json())
		.then(data => console.log(data))
	}
}

export function createUser(data){
	return (dispatch) => {
		fetch(`${url}/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => res.json()).then(data =>{
			console.log(data)
			dispatch({type:"POST_USER", data})
		})
	}
}


export function loginUser(data, cb){
	return (dispatch) => {
		fetch(`${url}/signin`,{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => res.json()).then(data => {
			console.log(data)
			if(data.user._id){
				dispatch({type:"LOGIN_SUCCESS", data: data.user})
				cb(true)
			}else {
				dispatch({type:"LOGIN_ERR", data})
			}
		})
	}
}

export function isLoggedIn(){
	return (dispatch) => {
		fetch(`/api/isLoggedIn`).then(res => res.json()).then(data => {
			dispatch({
				type: "LOGIN_SUCCESS",
				data: data.user
			})
		})
	}
}


export function loggedOut(cb) {
  return dispatch => {
    fetch('/api/logout').then(res => res.json())
    .then(data => {
      dispatch({type: 'LOGOUT_SUCCESS', data})
      cb(true)
    })
  }
}
