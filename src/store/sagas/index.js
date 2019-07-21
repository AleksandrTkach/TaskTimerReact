import { all } from 'redux-saga/effects';

import { watchGetLocalStorage } from './getLocalStorage';
import { watchSetLocalStorage } from './setLocalStorage';

export default function* rootSaga() {
	yield all([watchGetLocalStorage(), watchSetLocalStorage()]);
}
