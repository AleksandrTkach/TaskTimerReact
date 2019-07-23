import { takeEvery, select } from 'redux-saga/effects';
import { setLS } from 'utils/utils';
import { SET_TASK, REMOVE_TASK } from 'store/modules/tasks';

function* setTask() {
  try {
    const { tasks } = yield select();
    setLS('tasks', tasks, false);
  } catch (error) {
    console.log('error: ', error);
  }
}
function* removeTask() {
  try {
    const { tasks } = yield select();
    setLS('tasks', tasks, false);
  } catch (error) {
    console.log('error: ', error);
  }
}

export function* watchSetTasks() {
  yield takeEvery(SET_TASK, setTask);
}
export function* watchRemoveTasks() {
  yield takeEvery(REMOVE_TASK, removeTask);
}
