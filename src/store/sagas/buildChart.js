import { put, call, select, takeEvery } from 'redux-saga/effects';
import {
  BUILD_CHART,
  buildChartReset,
  buildChartSuccess,
} from 'store/modules/chart';
import { changeTaskFormat, setChartColumns } from 'utils/utils';

function* buildChart() {
  try {
    yield put(buildChartReset());

    const { tasks, chartColumns } = yield select();
    const newTasksFormat = yield call(() => changeTaskFormat(tasks));
    const chartColumnsWithValue = yield call(() =>
      setChartColumns(chartColumns, newTasksFormat)
    );

    yield put(buildChartSuccess(chartColumnsWithValue));
  } catch (error) {
    console.log('error: ', error);
  }
}

export function* watchBuildChart() {
  yield takeEvery(BUILD_CHART, buildChart);
}
