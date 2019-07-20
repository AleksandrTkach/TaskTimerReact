import {
	REQUEST_LOCAL_STORAGE_SUCCESS,
	REQUEST_LOCAL_STORAGE_ERROR,
} from 'store/types';

const initialState = {
	value: null,
};

const localStorage = (state = initialState, {type, value}) => {
	switch (type) {
		case REQUEST_LOCAL_STORAGE_SUCCESS:
			return {
				value,
			};

		case REQUEST_LOCAL_STORAGE_ERROR:
			return {
				value: null,
			};

		default:
			return state;
	}
};

export default localStorage;
