import {
	SET_TASK,
	GET_LOCAL_STORAGE,
	REQUEST_LOCAL_STORAGE,
	REQUEST_LOCAL_STORAGE_SUCCEEDED,
	REQUEST_LOCAL_STORAGE_FAILED,
} from 'store/types';

export const setTask = (payload) => {
	return {
		type: SET_TASK,
		payload : payload,
	};
};

export const requestLocalStorage = () => {
	return {
		type: REQUEST_LOCAL_STORAGE
	};
};

export const requestLocalStorageSuccess = (value) => {
	return {
		type: REQUEST_LOCAL_STORAGE_SUCCEEDED,
		value,
	};
};

export const requestLocalStorageError = () => {
	return { type: REQUEST_LOCAL_STORAGE_FAILED };
};

export const getLocalStorage = (name) => {
	return {
		type: GET_LOCAL_STORAGE,
		name,
	};
};
