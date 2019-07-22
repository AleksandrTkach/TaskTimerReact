import { combineReducers } from 'redux';
import tasks from './tasks';
import chartColumns from './chartColumns';
import localStorage from './localStorage';

export default combineReducers({
	tasks,
	chartColumns,
	localStorage,
});
