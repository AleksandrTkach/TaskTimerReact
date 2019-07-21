import { SET_TASK, REMOVE_TASK } from '../types';

// const initState = JSON.parse(localStorage.getItem('tasks')) || [];

const initState = [
	{
		taskName: 'task 0',
		timeStart: 1563658320000,
		timeEnd:   1563665520000,
		timeSpend: 1563665520000 - 1563658320000,
	},
	{
		taskName: 'task 1',
		timeStart: 1563714120000,
		timeEnd: 1563715200000,
		timeSpend: 1563715200000 - 1563714120000,
	},
	{
		taskName: 'task 2',
		timeStart: 1563716400000,
		timeEnd: 1563717840000,
		timeSpend: 1563717840000 - 1563716400000,
	},
	{
		taskName: 'task 3',
		timeStart: 1563722100000,
		timeEnd: 1563740100000,
		timeSpend: 1563740100000 - 1563722100000,
	},
	{
		taskName: 'task 4',
		timeStart: 1563741000000,
		timeEnd: 1563742799000,
		timeSpend: 1563742799000 - 156374100000,
	},
];

const tasks = (state = initState, action) => {
	switch (action.type) {
		case SET_TASK:
			const tasks = [...state, action.payload];
			localStorage.setItem('tasks', JSON.stringify(tasks));
			return tasks;

		case REMOVE_TASK:
			let newTasks = [...state];
			newTasks.splice(action.index, 1);
			localStorage.setItem('tasks', JSON.stringify(newTasks));
			return newTasks;

		default:
			return state;
	}
};

export default tasks;
