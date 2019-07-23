import { all } from 'redux-saga/effects';

import { watchBuildChart } from './buildChart';
import { watchTasks } from './tasks';

export default function* rootSaga() {
  yield all([watchBuildChart(), watchTasks()]);
}
