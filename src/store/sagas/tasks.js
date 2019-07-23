import { takeEvery, select } from 'redux-saga/effects';
import { action, getLS, setLS } from 'utils/utils';
import { SET_TASK, REMOVE_TASK } from 'store/modules/tasks';

function* setTask() {
  try {
    const { tasks } = yield select();
    setLS('tasks', [...tasks, action.payload], false);
  } catch (error) {
    console.log('error: ', error);
  }
}
function* removeTask() {
  try {
    const { tasks } = yield select();
    setLS(
      'tasks',
      [...tasks.slice(0, action.payload), ...tasks.slice(action.payload + 1)],
      false
    );
  } catch (error) {
    console.log('error: ', error);
  }
}

export function* watchTasks() {
  yield takeEvery(SET_TASK, setTask);
  yield takeEvery(REMOVE_TASK, removeTask);
}
