import { MIN, TASK_DURATION, AMOUNT_TASKS } from 'utils/constants';

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
