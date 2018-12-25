import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = compose(
		applyMiddleware(sagaMiddleware)
)(createStore);

let composeEnhancers = process.env.NODE_ENV === 'development'
		// eslint-disable-next-line no-underscore-dangle
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

if(!composeEnhancers) {
	composeEnhancers = compose;
}

const store = createStoreWithMiddleware(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

export default store;