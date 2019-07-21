import { put, call, takeEvery } from 'redux-saga/effects';
import { GET_LOCAL_STORAGE } from 'store/types';
import { getLocalStorageSuccess, getLocalStorageError } from 'store/actions';

function* getLocalStorage({ key }) {
	try {
		const value = yield call(() =>
			Promise.resolve().then(() => localStorage.getItem(key))
		);
		yield put(getLocalStorageSuccess({ key, value }));
	} catch (error) {
		yield put(getLocalStorageError(error));
	}
}

export function* watchGetLocalStorage() {
	yield takeEvery(GET_LOCAL_STORAGE, getLocalStorage);
}
