import { action, getLS, setLS } from 'utils/utils';

export const SET_TASK = 'SET_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const REFRESH_TASKS = 'REFRESH_TASKS';
export const RESET_TASKS = 'RESET_TASKS';

export const setTask = payload => action(SET_TASK, payload);
export const removeTask = index => action(REMOVE_TASK, index);
export const refreshTasks = tasks => action(REFRESH_TASKS, tasks);
export const resetTasks = index => action(RESET_TASKS, index);

const initState = getLS('tasks', false) || [];

export const tasks = (state = initState, action) => {
  switch (action.type) {
    case SET_TASK:
      setLS('tasks', [...state, action.payload], false);
      return [...state, action.payload];

    case REMOVE_TASK:
      setLS(
        'tasks',
        [...state.slice(0, action.payload), ...state.slice(action.payload + 1)],
        false
      );
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];

    case REFRESH_TASKS:
      return action.payload;

    case RESET_TASKS:
      return [];

    default:
      return state;
  }
};
