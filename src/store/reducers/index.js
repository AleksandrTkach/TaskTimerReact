import { combineReducers } from 'redux';
import tasks from './tasks';
import chartColumns from './chartColumns';

export default combineReducers({
	tasks,
	chartColumns,
});
