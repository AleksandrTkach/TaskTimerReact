import * as types from 'store/types';

export const setTask = payload => action(types.SET_TASK, payload);
export const removeTask = index => action(types.REMOVE_TASK, index);
export const refreshTasks = tasks => action(types.REFRESH_TASKS, tasks);
export const resetTasks = index => action(types.RESET_TASKS, index);

export const buildChart = () => action(types.BUILD_CHART);
export const buildChartReset = () => action(types.BUILD_CHART_RESET);
export const buildChartSuccess = chartColumns =>
	action(types.BUILD_CHART_SUCCESS, chartColumns);

const action = (type, payload) => {
	return {
		type,
		payload,
	};
};
