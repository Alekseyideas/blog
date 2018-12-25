import { call, put } from 'redux-saga/effects';
import * as actionType from '../actionTypes';
import axios from 'axios';
import { postCommentsPath } from '../../config';

// get all Posts action
function getComments(postId) {

	return axios.get( `${postCommentsPath}${postId}` )
			.then( resp => {
				return resp.data
			})
			.catch( e => {
				console.log(e);
				return [];
			});

}

export function* sagaGetComments( action ) {
	try {
		const data = yield call(getComments, action.postId );
		yield put({type: actionType.GET_COMMENTS_SUCCESS, data})
	} catch (e) {
		yield put({type: actionType.GET_COMMENTS_ERROR, e})
	}
}
