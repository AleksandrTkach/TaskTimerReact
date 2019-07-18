import { SET_TASK } from '../types';

export const setTask = (payload) => {
	return {
		type: SET_TASK,
		payload : payload,
	};
};
