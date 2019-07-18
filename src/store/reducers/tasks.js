import { SET_TASK } from '../types';

const initState = JSON.parse(localStorage.getItem('tasks')) || [];

const tasks = (state = initState, action) => {
	switch (action.type) {
		case SET_TASK:
			const tasks = [...state, action.payload];
			localStorage.setItem('tasks', JSON.stringify(tasks));
			return tasks;

		default:
			return state;
	}
};

export default tasks;
