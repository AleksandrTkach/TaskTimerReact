import { MIN, TASK_DURATION, AMOUNT_TASKS, FOTMAT } from 'utils/constants';
import moment from 'moment';

/**
 * Get value from LocalStorage
 *
 * @param key
 * @param isNumber
 * @returns {number}
 */
export const getLS = (key, isNumber = true) =>
  isNumber
    ? Number(localStorage.getItem(key))
    : JSON.parse(localStorage.getItem(key));

/**
 * Set value from LocalStorage
 *
 * @param key
 * @param value
 * @param isNumber
 */
export const setLS = (key, value, isNumber = true) =>
  isNumber
    ? localStorage.setItem(key, value)
    : localStorage.setItem(key, JSON.stringify(value));

/**
 * Get current time
 *
 * @returns {number}
 */
export const currentTime = () => new Date().getTime();

/**
 * Get format time for output display
 *
 * @param value
 * @param isUTC
 * @returns {string}
 */
export const getFormatTime = (value, isUTC) =>
  isUTC ? moment.utc(+value).format(FOTMAT) : moment(+value).format(FOTMAT);

/**
 * Generate new tasks
 *
 * @returns {Array}
 */
export const generateNewTasks = () => {
  const date = new Date();
  const amountTasks = _getRandomNumber(AMOUNT_TASKS.MIN, AMOUNT_TASKS.MAX);
  let timeStart = Number(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
  );

  const newTasks = [];
  for (let i = 0; i < amountTasks; i++) {
    const timeEnd = _getNextTime(timeStart);

    newTasks.push({
      taskName: `Task ${i}`,
      timeStart,
      timeEnd,
      timeSpend: timeEnd - timeStart,
    });

    timeStart = _getNextTime(timeEnd);
  }
  return newTasks;
};

/**
 * Get random time for task
 * @param time
 * @returns {*}
 * @private
 */
function _getNextTime(time) {
  return time + _getRandomNumber(TASK_DURATION.MIN, TASK_DURATION.MAX) * MIN;
}

/**
 * Get random number
 *
 * @param min
 * @param max
 * @returns {number}
 * @private
 */
function _getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Convert format tasks for chart
 *
 * @param tasks
 * @returns {*}
 */
export const changeTaskFormat = tasks =>
  tasks.map(task => {
    return {
      startHour: Number(moment(task.timeStart).format('H')),
      startMin: Number(moment(task.timeStart).format('m')),
      startSec: Number(moment(task.timeStart).format('s')),

      endHour: Number(moment(task.timeEnd).format('H')),
      endMin: Number(moment(task.timeEnd).format('m')),
      endSec: Number(moment(task.timeEnd).format('s')),
    };
  });

/**
 * Set columns for chart
 *
 * @param chartColumns
 * @param newTasksFormat
 * @returns {Array}
 */
export const setChartColumns = (chartColumns, newTasksFormat) => {
  let columns = [...chartColumns];

  for (const task of newTasksFormat) {
    const diffHour = task.endHour - task.startHour;

    if (diffHour > 0) {
      for (let hour = task.startHour; hour < task.endHour; hour++) {
        if (task.startHour === hour) {
          columns[hour].uv += 60 - task.startMin;
        } else {
          columns[hour].uv += 60;
        }
      }
      columns[task.endHour].uv += task.endMin;
    } else if (diffHour === 0) {
      columns[task.endHour].uv += task.endMin - task.startMin;
    }
  }

  return columns;
};

/**
 * Get empty columns for chart
 *
 * @returns {Array}
 */
export const getDefaultChartColumns = () => {
  const columns = [];
  for (let i = 0; i < 24; i++) {
    columns.push({
      name: i,
      uv: 0,
    });
  }
  return columns;
};

/**
 * Helper for actions
 *
 * @param type
 * @param payload
 * @returns {{type: *, payload: *}}
 */
export const action = (type, payload) => {
  return {
    type,
    payload,
  };
};
