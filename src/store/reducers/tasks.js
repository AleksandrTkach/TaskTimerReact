import { SET_TASK, REMOVE_TASK } from '../types';

const initState = JSON.parse(localStorage.getItem('tasks')) || [];

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
