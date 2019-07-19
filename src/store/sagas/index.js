import { put, call, takeEvery } from 'redux-saga/effects';
import {GET_LOCAL_STORAGE} from 'store/types';
import {
	requestLocalStorage,
	requestLocalStorageSuccess,
	requestLocalStorageError,
} from 'store/actions';

// export function* watchSetLocalStorage() {
// 	yield takeEvery(GET_LOCAL_STORAGE, getLocalStorage);
// }
export function* watchSetLocalStorage() {
	yield takeEvery(GET_LOCAL_STORAGE, getLocalStorage);
}

function* getLocalStorage(action) {
	console.log('saga getLocalStorage name: ', action.name);
	try {
		yield put(requestLocalStorage());
		const value = yield call(() => {
				// return fetch('https://dog.ceo/api/breeds/image/random')
				// 	.then(res => res.json());
					return Promise.resolve().then(() => localStorage.getItem(action.name));
			}
		);
		console.log('value: ', value);
		yield put(requestLocalStorageSuccess(value));
	} catch (error) {
		yield put(requestLocalStorageError());
	}
}
