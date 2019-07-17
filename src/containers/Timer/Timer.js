import React from 'react';
import ReactTimer from 'react-compound-timer';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Dialog from 'components/Dialog';
import Button from './Button/Button';
import TaskInfo from './Tasks/Tabs';
import './Timer.scss';

export default class Timer extends React.Component {
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
		if (this._getItem('tasks') === null) {
			this._setItem('tasks', JSON.stringify([]));
		}

		if (+this._getItem('isStartTimer')) {
			this.setState({
				initialTime: this._getCurrentTime() - this._getItem('timeStart'),
				isStartTimer: true
			});
		}
	}

	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

	toggleStatusTimer = () => {
		this.setState({
			isStartTimer: !this.state.isStartTimer
		});

		if (this.state.isStartTimer) {
			if (this.state.taskName === '') {
				this.clickDialogOpen();
			}
			this._setItem('isStartTimer', 0);
		} else {
			this._setItem('isStartTimer', 1);
			this._setItem('timeStart', this._getCurrentTime());
		}
	};

	clickDialogOpen = () => {
		this.setState({ isOpenDialog:true });
	};

	clickDialogSuccess = () => {
		this.setState({ isOpenDialog:false });
		this._addTaskLog();
		this._resetTimer();
	};


	_getItem = name => localStorage.getItem(name);
	_setItem = (name, value) => localStorage.setItem(name, value);
	_removeItem = name => localStorage.removeItem(name);

	_getCurrentTime = () => new Date().getTime();
	_getFormatValue = (value, text = ':') => `${value < 10 ? `0${value}` : value}${text}`;

	_resetTimer = () => this.setState({
		taskName: '',
		initialTime: 0,
		isStartTimer: false,
		isOpenDialog: false,
	});

	_addTaskLog = () => {
		let tasks = JSON.parse(this._getItem('tasks'));

		const taskName = this.state.taskName;
		const timeStart = this._getItem('timeStart');
		const timeEnd = this._getCurrentTime();
		const timeSpend = timeEnd - timeStart;

		tasks.push({
			taskName,
			timeStart,
			timeEnd,
			timeSpend,
		});

		this._setItem('tasks', JSON.stringify(tasks));
		// this._removeItem('timeStart');

	};

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
						clickDialogOpen={this.clickDialogOpen}
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
							onChange={this.handleChange('taskName')}
						/>
					</Dialog>

					<TextField
						value={taskName}
						onChange={this.handleChange('taskName')}
						placeholder="Name of your task"
						className="timer__input"
					/>

					<ReactTimer
						initialTime={initialTime}
						startImmediately={isStartTimer}
						formatValue={value => this._getFormatValue(value)}
					>
						{({ start, stop, reset }) => (
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
								<Button start={start} stop={stop} reset={reset} isStartTimer={isStartTimer} toggleStatusTimer={this.toggleStatusTimer}/>
							</>
						)}
					</ReactTimer>
				</div>

				<TaskInfo/>
			</>
		);
	}
}
