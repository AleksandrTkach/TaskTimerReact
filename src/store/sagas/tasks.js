import { takeEvery, select } from 'redux-saga/effects';
import { setLS } from 'utils/utils';
import { SET_TASK, REMOVE_TASK } from 'store/modules/tasks';

function* setTask() {
  try {
    console.log('setTask');
    const { tasks } = yield select();
    setLS('tasks', tasks, false);
  } catch (error) {
    console.log('error: ', error);
  }
}
function* removeTask() {
  try {
    console.log('removeTask');

    const { tasks } = yield select();
    setLS('tasks', tasks, false);
  } catch (error) {
    console.log('error: ', error);
  }
}

export function* watchTasks() {
  yield takeEvery(SET_TASK, setTask);
  yield takeEvery(REMOVE_TASK, removeTask);
}
