import React from 'react';
import Button from '@material-ui/core/Button/Button';

import { connect } from 'react-redux';
import { setTask, removeTask, resetTasks } from 'store/actions';

class BtnGenerate extends React.Component {
	_generate = async () => {
		await this.props.resetTasks();

		const date = new Date();
		const amountTasks = this._getRandomNumber(10, 15);
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

	_getNextTime = time => time + this._getRandomNumber(10, 90) * (1000 * 60);
	_getRandomNumber = (min, max) =>
		Math.round(Math.random() * (max - min) + min);

	render() {
		return (
			<Button
				variant="contained"
				className={'btn'}
				onClick={() => this._generate()}
			>
				Generate
			</Button>
		);
	}
}

const mapStateToProps = ({ tasks }) => {
	return {
		tasks,
	};
};

const mapDispatchToProps = {
	setTask,
	removeTask,
	resetTasks,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BtnGenerate);
