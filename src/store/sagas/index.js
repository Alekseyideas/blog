import { takeLatest } from 'redux-saga/effects';
import * as actionType from '../actionTypes';
import {sagaGetPost, sagaGetPosts} from './postsSaga';
import {sagaGetComments} from './commentsSaga';

export default  function* watcherSaga() {
	yield takeLatest(
		actionType.GET_POSTS_PENDING,
			sagaGetPosts
	);

	yield takeLatest(
			actionType.GET_POST_PENDING,
			sagaGetPost
	);

	yield takeLatest(
			actionType.GET_COMMENTS_PENDING,
			sagaGetComments
	);

}