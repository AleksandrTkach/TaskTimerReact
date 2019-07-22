import { all } from 'redux-saga/effects';

import { watchGetLocalStorage } from './getLocalStorage';
import { watchSetLocalStorage } from './setLocalStorage';
import { watchBuildChart } from './buildChart';

export default function* rootSaga() {
	yield all([
		watchGetLocalStorage(),
		watchSetLocalStorage(),
		watchBuildChart(),
	]);
}
