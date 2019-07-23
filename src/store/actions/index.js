import * as types from 'store/types';

export const setTask = payload => {
	return {
		type: types.SET_TASK,
		payload,
	};
};

export const removeTask = index => {
	return {
		type: types.REMOVE_TASK,
		index,
	};
};

export const refreshTasks = tasks => {
	return {
		type: types.REFRESH_TASKS,
		tasks,
	};
};

export const resetTasks = index => {
	return {
		type: types.RESET_TASKS,
		index,
	};
};

export const buildChart = () => {
	return {
		type: types.BUILD_CHART,
	};
};

export const buildChartSuccess = chartColumns => {
	return {
		type: types.BUILD_CHART_SUCCESS,
		chartColumns,
	};
};

export const buildChartReset = () => {
	return {
		type: types.BUILD_CHART_RESET,
	};
};
