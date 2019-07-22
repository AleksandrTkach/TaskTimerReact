import React from 'react';
import Button from '@material-ui/core/Button/Button';

import { connect } from 'react-redux';
import { setTask, resetTasks, buildChart } from 'store/actions';

import './BtnGenerate.scss';

const AMOUNT_TASKS = {
	MIN: 10,
	MAX: 15,
};
const TASK_DURATION = {
	MIN: 10,
	MAX: 90,
};

const MIN = 1000 * 60;

class BtnGenerate extends React.Component {
	_generate = async () => {
		await this.props.resetTasks();
		await this._createNewTasks();
		this.props.buildChart();
	};

	_createNewTasks = async () => {
		const date = new Date();
		const amountTasks = this._getRandomNumber(
			AMOUNT_TASKS.MIN,
			AMOUNT_TASKS.MAX
		);
		let timeStart = Number(
			new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
		);

		for (let i = 0; i < amountTasks; i++) {
			const timeEnd = this._getNextTime(timeStart);

			await this.props.setTask({
				taskName: `Task ${i}`,
				timeStart,
				timeEnd,
				timeSpend: timeEnd - timeStart,
			});

			timeStart = this._getNextTime(timeEnd);
		}
	};

	_getNextTime = time =>
		time + this._getRandomNumber(TASK_DURATION.MIN, TASK_DURATION.MAX) * MIN;
	_getRandomNumber = (min, max) =>
		Math.round(Math.random() * (max - min) + min);

	render() {
		return (
			<Button
				variant="contained"
				className="btn btn__generate"
				onClick={() => this._generate()}
			>
				Generate
			</Button>
		);
	}
}

const mapDispatchToProps = {
	setTask,
	resetTasks,
	buildChart,
};

export default connect(
	null,
	mapDispatchToProps
)(BtnGenerate);
