import React from 'react';
import ReactTimer from 'react-compound-timer';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Dialog from 'components/Dialog';
import Button from './Button/Button';
import TaskInfo from './Tasks/Tabs';
import './Timer.scss';

import { setTask } from 'store/actions';
import { connect } from 'react-redux';

class Timer extends React.Component {
	constructor() {
		super();
		this.state = {
			taskName: '',
			initialTime: 0,
			isStartTimer: false,
			isOpenDialog: false,
			isDisabledDialogSuccess: true,
		};
	}

	componentWillMount() {
		const isStartTimer = this._getItem('isStartTimer');
		const timePassed = this._getItem('timePassed');

		if (!isStartTimer) {
			this.setState({
				initialTime: timePassed,
				isStartTimer,
			});
		} else {
			this.setState({
				initialTime: (this._getCurrentTime() - this._getItem('timeStart')) + timePassed,
				isStartTimer,
			});
		}
	}

	toggleStatusTimer = (start, stop) => {

		this.setState({
			isStartTimer: !this.state.isStartTimer
		});

		const currentTime = this._getCurrentTime();

		if (this.state.isStartTimer) {
			this.state.taskName === '' ? this._toggleIsOpenDialog(true) : this.addTaskLog(currentTime - this._getItem('timePassed'));
			stop();
			this._setItem('isStartTimer', 0);
			this._setItem('timeStop', currentTime);
			this._setItem('timePassed', this._getItem('timePassed') + (currentTime -  this._getItem('timeStart')));

		} else {
			start();
			this._setItem('isStartTimer', 1);
			this._setItem('timeStart', currentTime);
		}
	};

	clickDialogSuccess = () => {
		this._toggleIsOpenDialog(false);
		this.addTaskLog(this._getItem('timePassed'));
	};

	addTaskLog = (timeSpend) => {
		const taskName = this.state.taskName;
		const timeStart = this._getItem('timeStart');
		let timeEnd = this._getItem('timeStop');

		console.log('timeSpend: ', timeSpend, typeof timeSpend);
		const sec = 1000;

		if (timeSpend < sec) {
			timeEnd += sec;
			timeSpend = sec;
		}

		this.props.setTask({
			taskName,
			timeStart,
			timeEnd,
			timeSpend,
		});

		this._resetTimer();
	};

	handleChangeTaskName = (event) => {
		this.setState({
			taskName: event.target.value,
			isDisabledDialogSuccess: event.target.value === '',
		});
	};

	_toggleIsOpenDialog = status => this.setState({ isOpenDialog: status });
	_getItem = name => Number(localStorage.getItem(name));
	_setItem = (name, value) => localStorage.setItem(name, value);

	_getCurrentTime = () => new Date().getTime();
	_getFormatValue = (value, text = ':') => `${value < 10 ? `0${value}` : value}${text}`;

	_resetTimer = () => {
		console.log('_resetTimer');
		this.setState({
			taskName: '',
			initialTime: 0,
			isStartTimer: false,
			isOpenDialog: false,
		});
	};

	render() {
		const {
			taskName,
			initialTime,
			isStartTimer,
			isOpenDialog,
			isDisabledDialogSuccess,
		} = this.state;

		return (
			<>
				<div className="timer__wrapper">

					<Dialog
						isDisabledDialogSuccess={isDisabledDialogSuccess}
						isOpenDialog={isOpenDialog}
						clickDialogOpen={() => this._toggleIsOpenDialog(true)}
						clickDialogClose={() => this._toggleIsOpenDialog(false)}
						clickDialogSuccess={this.clickDialogSuccess}
						dialogTitle="Empty task name"
						dialogContentText="You are trying close your task without name, please enter the name!"
					>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Task name"
							type="text"
							fullWidth
							value={taskName}
							onChange={this.handleChangeTaskName}
						/>
					</Dialog>

					<TextField
						value={taskName}
						onChange={this.handleChangeTaskName}
						placeholder="Name of your task"
						className="timer__input"
					/>

					<ReactTimer
						initialTime={initialTime}
						startImmediately={isStartTimer}
						formatValue={value => this._getFormatValue(value)}
					>
						{({ start, stop }) => (
							<>
								<Paper className="timer">
									<ReactTimer.Hours
										formatValue={value => this._getFormatValue(value)}
									/>
									<ReactTimer.Minutes />
									<ReactTimer.Seconds
										formatValue={value => this._getFormatValue(value, '')}
									/>
								</Paper>
								<Button start={start}
												stop={stop}
												isStartTimer={isStartTimer}
												toggleStatusTimer={this.toggleStatusTimer}
								/>
							</>
						)}
					</ReactTimer>
				</div>

				<TaskInfo/>
			</>
		);
	}
}

const mapStateToProps = ({tasks}) => {
	return {
		tasks,
	};
};

const mapDispatchToProps = {
	setTask: setTask
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Timer);
