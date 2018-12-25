import * as actionType from '../actionTypes';

const commentsState = {
	comments: [],
	loaded: false,
	error: false
};

export function getComments( state = commentsState, action={}) {
	switch (action.type) {
		case actionType.GET_COMMENTS_PENDING:
			return {
				...state,
				error: false,
				loaded: false
			};
		case actionType.GET_COMMENTS_SUCCESS:
			return {
				...state,
				error: false,
				comments: action.data,
				loaded: true
			};
		case actionType.GET_COMMENTS_ERROR:
			return {
				...state,
				error: true,
				loaded: false
			};
		default:
			return state;
	}
}
