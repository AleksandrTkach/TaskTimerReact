import {
	SET_TASK,
	GET_LOCAL_STORAGE,
	REQUEST_LOCAL_STORAGE_SUCCESS,
	REQUEST_LOCAL_STORAGE_ERROR,
} from 'store/types';

export const setTask = payload => {
	return {
		type: SET_TASK,
		payload: payload,
	};
};

export const getLocalStorage = key => {
	return {
		type: GET_LOCAL_STORAGE,
		key,
	};
};

export const requestLocalStorageSuccess = value => {
	return {
		type: REQUEST_LOCAL_STORAGE_SUCCESS,
		value,
	};
};

export const requestLocalStorageError = () => {
	return { type: REQUEST_LOCAL_STORAGE_ERROR };
};
