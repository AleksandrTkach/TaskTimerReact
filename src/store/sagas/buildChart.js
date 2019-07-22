import { put, call, select, takeEvery } from 'redux-saga/effects';
import { BUILD_CHART } from 'store/types';
import { buildChartReset, buildChartSuccess } from 'store/actions';
import moment from 'moment';

function* buildChart() {
	try {
		yield put(buildChartReset());

		const { tasks, chartColumns } = yield select();
		const newTasksFormat = yield call(() => changeTaskFormat(tasks));
		const chartColumnsWithValue = yield call(() =>
			setColumns(chartColumns, newTasksFormat)
		);

		yield put(buildChartSuccess(chartColumnsWithValue));
	} catch (error) {
		console.log('error: ', error);
	}
}

export function* watchBuildChart() {
	yield takeEvery(BUILD_CHART, buildChart);
}

const setColumns = (chartColumns, newTasksFormat) => {
	let columns = [...chartColumns];

	for (const task of newTasksFormat) {
		const diffHour = task.endHour - task.startHour;

		if (diffHour > 0) {
			for (let hour = task.startHour; hour < task.endHour; hour++) {
				if (task.startHour === hour) {
					columns[hour].uv += 60 - task.startMin;
				} else {
					columns[hour].uv += 60;
				}
			}
			columns[task.endHour].uv += task.endMin;
		} else if (diffHour === 0) {
			columns[task.endHour].uv += task.endMin - task.startMin;
		}
	}

	return columns;
};

const changeTaskFormat = tasks =>
	tasks.map(task => {
		return {
			startHour: Number(moment(task.timeStart).format('H')),
			startMin: Number(moment(task.timeStart).format('m')),
			startSec: Number(moment(task.timeStart).format('s')),

			endHour: Number(moment(task.timeEnd).format('H')),
			endMin: Number(moment(task.timeEnd).format('m')),
			endSec: Number(moment(task.timeEnd).format('s')),
		};
	});
