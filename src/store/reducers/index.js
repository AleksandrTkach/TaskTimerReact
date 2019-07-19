import { combineReducers } from 'redux';
import tasks from './tasks';
import localStorage from './localStorage';

export default combineReducers({
	tasks,
	localStorage,
});
