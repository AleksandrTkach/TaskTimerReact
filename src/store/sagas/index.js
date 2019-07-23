import { all } from 'redux-saga/effects';

import { watchBuildChart } from './buildChart';

export default function* rootSaga() {
  yield all([watchBuildChart()]);
}
