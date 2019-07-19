import {
	REQUEST_LOCAL_STORAGE,
	REQUEST_LOCAL_STORAGE_SUCCEEDED,
	REQUEST_LOCAL_STORAGE_FAILED,
} from 'store/types';

const initialState = {
	value: null,
	loading: false,
	error: false,
};
const localStorage = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_LOCAL_STORAGE:
			return {
				value: null,
				loading: true,
				error: false,
			};
		case REQUEST_LOCAL_STORAGE_SUCCEEDED:
			return {
				value: action.value,
				loading: false,
				error: false,
			};
		case REQUEST_LOCAL_STORAGE_FAILED:
			return {
				value: null,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};

export default localStorage;
