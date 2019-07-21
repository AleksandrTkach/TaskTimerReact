import * as types from 'store/types';

const initialState = {
	isStartTimer: 0,
	timePassed: 0,
	timeStop: null,
	timeStart: null,
};

const localStorage = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_LOCAL_STORAGE_SUCCESS:
			return {
				[action.value.key]: action.value.value,
			};

		case types.GET_LOCAL_STORAGE_ERROR:
			return {
				value: null,
			};

		case types.SET_LOCAL_STORAGE_SUCCESS:
			return {
				[action.value.key]: action.value.value,
			};

		case types.SET_LOCAL_STORAGE_ERROR:
			return {
				[action.key]: 'error',
			};

		default:
			return state;
	}
};

export default localStorage;
