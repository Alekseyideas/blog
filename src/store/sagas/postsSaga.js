import { call, put } from 'redux-saga/effects';
import * as actionType from '../actionTypes';
import axios from 'axios';
import {postsPath} from '../../config';

// get all Posts action
function getPosts() {

	return axios.get( postsPath )
			.then( resp => {
				return resp.data
			})
			.catch( e => {
				console.log(e);
				return [];
			});
}

export function* sagaGetPosts() {
	try {
		const data = yield call(getPosts);
		yield put({type: actionType.GET_POSTS_SUCCESS, data})
	} catch (e) {
		yield put({type: actionType.GET_POSTS_ERROR, e})
	}
}

// get current Post action
function getPost(id) {
	return axios.get( `${postsPath}/${id}`  )
			.then( resp => {
				return resp.data
			})
			.catch( e => {
				return {
					error: true,
					message: e
				};
			});
}

export function* sagaGetPost(action) {
	try {
		const data = yield call(getPost, action.id);

		if (!data.error) {
			yield put({type: actionType.GET_POST_SUCCESS, data})
		} else {
			yield put({type: actionType.GET_POST_ERROR, data})
		}
	} catch (e) {
		yield put({type: actionType.GET_POST_ERROR, e})
	}
}