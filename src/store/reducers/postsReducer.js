import * as actionType from '../actionTypes';

const postsState = {
	posts: [],
	loaded: false,
	error: false
};

export function getPosts( state = postsState, action={}) {
	switch (action.type) {
		case actionType.GET_POSTS_PENDING:
			return {
				...state,
				error: false,
				loaded: false
			};
		case actionType.GET_POSTS_SUCCESS:
			return {
				...state,
				error: false,
				posts: action.data,
				loaded: true
			};
		case actionType.GET_POSTS_ERROR:
			return {
				...state,
				error: true,
				loaded: false
			};
		default:
			return state;
	}
}

const postState = {
	post: {},
	pending: true,
	error: false,
};

export function getPost( state = postState, action={}) {
	switch (action.type) {
		case actionType.GET_POST_PENDING:
			return {
				...state,
				pending: true,
				error: false,
			};
		case actionType.GET_POST_SUCCESS:
			return {
				...state,
				pending: false,
				error: false,
				post: action.data,
			};
		case actionType.GET_POST_ERROR:
			return {
				...state,
				pending: false,
				error: true,
			};
		default:
			return state;
	}
}
