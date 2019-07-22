import React from 'react';
import ReactTimer from 'react-compound-timer';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Dialog from 'components/Dialog';
import Button from './Button/Button';
import './Timer.scss';

import { setTask, getLocalStorage, setLocalStorage } from 'store/actions';
import { connect } from 'react-redux';

class Timer extends React.Component {
	constructor() {
		super();
		this.state = {
			taskName: '',
			initialTime: 0,
			isStartTimer: false,
			isOpenDialogNoName: false,
		};
	}

	componentDidMount() {
		// this.props.setLocalStorage('isStartTimer', 1);
		// this.props.getLocalStorage('isStartTimer');

		const isStartTimer = this._getItem('isStartTimer');
		const timeSpend = this._getItem('timeSpend');

		if (!isStartTimer) {
			this.setState({
				initialTime: timeSpend,
				isStartTimer,
			});
		} else {
			this.setState({
				initialTime:
					this._getCurrentTime() - this._getItem('timeStart') + timeSpend,
				isStartTimer,
			});
		}
	}

	toggleStatusTimer = (start, stop, reset) => {
		this.setState({
			isStartTimer: !this.state.isStartTimer,
		});

		const currentTime = this._getCurrentTime();

		if (this.state.isStartTimer) {
			stop();
			this._setItem('isStartTimer', 0);
			this._setItem(
				'timeSpend',
				this._getItem('timeSpend') + (currentTime - this._getItem('timeStart'))
			);
			this._setItem(
				'timeStop',
				this._getItem('timeStart') + this._getItem('timeSpend')
			);
			this.state.taskName === ''
				? this._toggleDialogTaskNoName(true)
				: this._addTaskLog(reset);
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

	_addTaskLog = reset => {
		const taskName = this.state.taskName;
		const timeStart = this._getItem('timeStart');
		let timeEnd = this._getItem('timeStop');
		let timeSpend = this._getItem('timeSpend');

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

		this.setState({
			taskName: '',
			initialTime: 0,
			isStartTimer: false,
			isOpenDialogNoName: false,
		});

		this._setItem('timeSpend', 0);

		reset();
	};

	_toggleDialogTaskNoName = status =>
		this.setState({ isOpenDialogNoName: status });
	_getItem = name => Number(localStorage.getItem(name));
	_setItem = (name, value) => localStorage.setItem(name, value);

	_getCurrentTime = () => new Date().getTime();
	_getFormatValue = (value, text = ':') =>
		`${value < 10 ? `0${value}` : value}${text}`;

	render() {
		const {
			taskName,
			initialTime,
			isStartTimer,
			isOpenDialogNoName,
		} = this.state;

		return (
			<div className="timer__wrapper">
				<Dialog
					isOpenDialog={isOpenDialogNoName}
					clickDialogOpen={() => this._toggleDialogTaskNoName(true)}
					clickDialogClose={() => this._toggleDialogTaskNoName(false)}
					clickDialogSuccess={() => this._toggleDialogTaskNoName(false)}
					dialogTitle="Empty task name"
					dialogContentText="You are trying close your task without name, please enter the title and try gain!"
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
								onKeyDown={event => this.handleChangeTaskName(event, reset)}
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
							<Button
								start={start}
								stop={stop}
								reset={reset}
								isStartTimer={isStartTimer}
								toggleStatusTimer={this.toggleStatusTimer}
							/>
						</>
					)}
				</ReactTimer>
			</div>
		);
	}
}

const mapStateToProps = ({ tasks, localStorage }) => {
	return {
		tasks,
		localStorage,
	};
};

const mapDispatchToProps = {
	setTask,
	getLocalStorage,
	setLocalStorage,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Timer);
