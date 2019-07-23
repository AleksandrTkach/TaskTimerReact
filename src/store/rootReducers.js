import { combineReducers } from 'redux';
import { tasks } from './modules/tasks';
import { chartColumns } from './modules/chart';

export default combineReducers({
  tasks,
  chartColumns,
});
