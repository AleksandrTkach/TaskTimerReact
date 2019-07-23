import { MIN, TASK_DURATION, AMOUNT_TASKS } from 'utils/constants';
import moment from 'moment';

export const getLS = (key, isNumber = true) =>
	isNumber
		? Number(localStorage.getItem(key))
		: JSON.parse(localStorage.getItem(key));

export const setLS = (key, value, isNumber = true) =>
	isNumber
		? localStorage.setItem(key, value)
		: localStorage.setItem(key, JSON.stringify(value));

export const currentTime = () => new Date().getTime();

export const generateNewTasks = () => {
	const date = new Date();
	const amountTasks = _getRandomNumber(AMOUNT_TASKS.MIN, AMOUNT_TASKS.MAX);
	let timeStart = Number(
		new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
	);

	const newTasks = [];
	for (let i = 0; i < amountTasks; i++) {
		const timeEnd = _getNextTime(timeStart);

		newTasks.push({
			taskName: `Task ${i}`,
			timeStart,
			timeEnd,
			timeSpend: timeEnd - timeStart,
		});

		timeStart = _getNextTime(timeEnd);
	}
	return newTasks;
};

function _getNextTime(time) {
	return time + _getRandomNumber(TASK_DURATION.MIN, TASK_DURATION.MAX) * MIN;
}
function _getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

export const changeTaskFormat = tasks =>
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

export const setChartColumns = (chartColumns, newTasksFormat) => {
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

export const getDefaultChartColumns = () => {
	const columns = [];
	for (let i = 0; i < 24; i++) {
		columns.push({
			name: i,
			uv: 0,
		});
	}
	return columns;
};
