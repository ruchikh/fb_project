const initState = {
	allArticles: [],
	SingleArticle: {},
	currentUser: {},
	allComment: []
}


export default function rootReducer(state=initState, action){
	switch(action.type){
		case "GET_ALL_ARTICLES":{
			return {
				...state,
				allArticles: action.data
			}
		}
		case "GET_SINGLE_ARTICLE":{
			return {
				...state,
				SingleArticle: action.data
			}
		}
		case "GET_ALL_COMMENT": {
			return {
				...state,
				allComment: action.data
			}
		}
		case "LOGIN_SUCCESS": {
			return {
				...state,
				currentUser: action.data
			}
		}
		case "LOGOUT_SUCCESS":{
			return {
				...state,
				currentUser: {}
			}
		}
		default: return state;
	}
}