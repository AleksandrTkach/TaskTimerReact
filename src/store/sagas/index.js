import { put, call, takeEvery } from 'redux-saga/effects';
import { GET_LOCAL_STORAGE } from 'store/types';
import {
	requestLocalStorageSuccess,
	requestLocalStorageError,
} from 'store/actions';

function* getLocalStorage({key}) {
	try {
		const value = yield call(() =>
			Promise.resolve().then(() => localStorage.getItem(key))
		);
		yield put(requestLocalStorageSuccess(value));

	} catch (error) {
		yield put(requestLocalStorageError(error));
	}
}

export function* watchGetLocalStorage() {
	yield takeEvery(GET_LOCAL_STORAGE, getLocalStorage);
}

// export default function* rootSaga() {
// 	yield all([
// 		watchGetLocalStorage()
// 		-//-(),
// 	])
// }
