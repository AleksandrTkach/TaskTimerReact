import { all } from 'redux-saga/effects';

import { watchBuildChart } from './buildChart';
import { watchSetTasks, watchRemoveTasks } from './tasks';

export default function* rootSaga() {
  yield all([watchBuildChart(), watchSetTasks(), watchRemoveTasks()]);
}
