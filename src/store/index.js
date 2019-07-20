import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { watchGetLocalStorage } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(sagaMiddleware),
	)
);

sagaMiddleware.run(watchGetLocalStorage);

export default store;
