const { AMOUNT_TASKS, TASK_DURATION, MIN } = require('../utils/constants');
const { generateNewTasks } = require('../utils/utils');
const { changeTaskFormat } = require('../utils/utils');
const { setChartColumns } = require('../utils/utils');
const { getDefaultChartColumns } = require('../utils/utils');

const tasks = generateNewTasks();
const newTasksFormat = changeTaskFormat(tasks);

const chartColumns = getDefaultChartColumns();
const newChartColumns = setChartColumns(chartColumns, newTasksFormat);

expect.extend({
	toBeWithinRange(x, min, max) {
		const pass = x >= min && x <= max;
		if (pass) {
			return {
				message: () => `${x} to be within range min ${min} - max ${max}`,
				pass: true,
			};
		} else {
			return {
				message: () => `${x} not to be within range min ${min} - max ${max}`,
				pass: false,
			};
		}
	},
	toBeMax(x, max) {
		const pass = x <= max;
		if (pass) {
			return {
				message: () => `${x} to be less or equal ${max}`,
				pass: true,
			};
		} else {
			return {
				message: () => `${x} not to be less or equal ${max}`,
				pass: false,
			};
		}
	},
});

test('Chart have 24 columns/hours', () => {
	expect(newChartColumns).toHaveLength(24);
});

test(`Amount tasks got: ${tasks.length} (min: ${AMOUNT_TASKS.MIN} max: ${AMOUNT_TASKS.MAX})`, () => {
	expect(tasks.length).toBeWithinRange(AMOUNT_TASKS.MIN, AMOUNT_TASKS.MAX);
});

test('Max amount min in hour chart 60', () => {
	newChartColumns.map(column => expect(column.uv).toBeMax(60));
});
test(`Task duration min: ${TASK_DURATION.MIN} max: ${TASK_DURATION.MAX}`, () => {
	for (const task of tasks) {
		const amountMinutInTask = new Date(task.timeEnd - task.timeStart) / MIN;
		expect(amountMinutInTask).toBeWithinRange(
			TASK_DURATION.MIN,
			TASK_DURATION.MAX
		);
	}
});
