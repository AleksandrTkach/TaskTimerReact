import { put, call, takeEvery } from 'redux-saga/effects';
import { SET_LOCAL_STORAGE } from 'store/types';
import { setLocalStorageSuccess, setLocalStorageError } from 'store/actions';

function* setLocalStorage({ key, value }) {
	try {
		yield call(() =>
			Promise.resolve().then(() => localStorage.setItem(key, value))
		);
		yield put(setLocalStorageSuccess({ key, value }));
	} catch (error) {
		yield put(setLocalStorageError(error));
	}
}

export function* watchSetLocalStorage() {
	yield takeEvery(SET_LOCAL_STORAGE, setLocalStorage);
}
