import { combineReducers } from 'redux';
import { getPosts, getPost } from './postsReducer'
import { getComments } from './commentsReducer'

export const rootReducer = combineReducers({
	getPosts,
	getPost,
	getComments
});