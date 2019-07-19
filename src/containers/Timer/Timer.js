import React from 'react';
import ReactTimer from 'react-compound-timer';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Dialog from 'components/Dialog';
import Button from './Button/Button';
import TaskInfo from './Tasks/Tabs';
import './Timer.scss';

import { setTask, getLocalStorage } from 'store/actions';
import { connect } from 'react-redux';

class Timer extends React.Component {
	constructor() {
		super();
		this.state = {
			taskName: '',
			initialTime: 0,
			isStartTimer: false,
			isOpenDialog: false,
		};
	}

	componentWillMount() {
		console.log(this.props.getLocalStorage('timePassed'));

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

	toggleStatusTimer = (start, stop, reset) => {

		this.setState({
			isStartTimer: !this.state.isStartTimer
		});

		const currentTime = this._getCurrentTime();

		if (this.state.isStartTimer) {
			this.state.taskName === '' ? this._toggleIsOpenDialog(true) : this._addTaskLog(reset);
			stop();
			this._setItem('isStartTimer', 0);
			this._setItem('timePassed', this._getItem('timePassed') + (currentTime -  this._getItem('timeStart')));
			this._setItem('timeStop', this._getItem('timeStart') + this._getItem('timePassed'));

		} else {
			start();
			this._setItem('isStartTimer', 1);
			this._setItem('timeStart', currentTime);
		}
	};


	handleChangeTaskName = (event, reset = () => {}) => {
		if (event.key === 'Enter' && event.target.value !== '') {
			this._addTaskLog(reset);

		} else {
			this.setState({
				taskName: event.target.value,
			});
		}
	};

	_addTaskLog = (reset) => {
		const taskName = this.state.taskName;
		const timeStart = this._getItem('timeStart');
		let timeEnd = this._getItem('timeStop');
		let timeSpend = this._getItem('timePassed');

		const sec = 1000;
		if (timeSpend < sec && timeStart) {
			timeSpend = sec;
		}

		this.props.setTask({
			taskName,
			timeStart,
			timeEnd,
			timeSpend,
		});

		console.log('_resetTimer');
		this.setState({
			taskName: '',
			initialTime: 0,
			isStartTimer: false,
			isOpenDialog: false,
		});

		console.log('reset: ', reset);
		reset();
	};

	_resetTimer = () => {
		console.log('_resetTimer');

	};

	_toggleIsOpenDialog = status => this.setState({ isOpenDialog: status });
	_getItem = name => Number(localStorage.getItem(name));
	_setItem = (name, value) => localStorage.setItem(name, value);

	_getCurrentTime = () => new Date().getTime();
	_getFormatValue = (value, text = ':') => `${value < 10 ? `0${value}` : value}${text}`;

	render() {
		const {
			taskName,
			initialTime,
			isStartTimer,
			isOpenDialog,
		} = this.state;

		return (
			<>
				<div className="timer__wrapper">

					<Dialog
						isOpenDialog={isOpenDialog}
						clickDialogOpen={() => this._toggleIsOpenDialog(true)}
						clickDialogClose={() => this._toggleIsOpenDialog(false)}
						clickDialogSuccess={() => this._toggleIsOpenDialog(false)}
						dialogTitle="Empty task name"
						dialogContentText="You are trying close your task without name, please enter the name!"
					/>

					<ReactTimer
						initialTime={initialTime}
						startImmediately={isStartTimer}
						formatValue={value => this._getFormatValue(value)}
					>
						{({ start, stop, reset }) => (
							<>
								<TextField
									value={taskName}
									onChange={this.handleChangeTaskName}
									onKeyDown={(event) => this.handleChangeTaskName(event, reset)}
									placeholder="Name of your task"
									className="timer__input"
								/>
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
												reset={reset}
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
	setTask: setTask,
	getLocalStorage: getLocalStorage,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Timer);
