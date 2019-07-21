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

export const getLocalStorage = key => {
	return {
		type: types.GET_LOCAL_STORAGE,
		key,
	};
};

export const getLocalStorageSuccess = value => {
	return {
		type: types.GET_LOCAL_STORAGE_SUCCESS,
		value,
	};
};

export const getLocalStorageError = (error) => {
	return {
		type: types.GET_LOCAL_STORAGE_ERROR,
		error,
	};
};


export const setLocalStorage = (key, value) => {
	return {
		type: types.SET_LOCAL_STORAGE,
		key,
		value,
	};
};


export const setLocalStorageSuccess = value => {
	return {
		type: types.SET_LOCAL_STORAGE_SUCCESS,
		value,
	};
};

export const setLocalStorageError = (error) => {
	return {
		type: types.SET_LOCAL_STORAGE_ERROR,
		error,
	};
};