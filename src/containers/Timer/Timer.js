import React from 'react';
import ReactTimer from 'react-compound-timer';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Dialog from 'components/Dialog';
import Button from './Button/Button';
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
		if (+this._getItem('isStartTimer')) {
			this.setState({
				initialTime: this._getCurrentTime() - this._getItem('timerStart'),
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
			this._removeItem('timerStart');
			this._setItem('isStartTimer', 0);
		} else {
			this._setItem('isStartTimer', 1);
			this._setItem('timerStart', this._getCurrentTime());
		}
	};

	clickDialogOpen = () => {
		this.setState({ isOpenDialog:true });
	};

	clickDialogClose = () => {
		this.setState({ isOpenDialog:false });
	};

	clickDialogSuccess = () => {
		this.clickDialogClose();
		console.log('clickDialogSuccess: ');
	};

	_getItem = name => localStorage.getItem(name);
	_setItem = (name, value) => localStorage.setItem(name, value);
	_removeItem = name => localStorage.removeItem(name);
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
			<div className="timer__wrapper">

				<Dialog
					isOpenDialog={isOpenDialog}
					clickDialogOpen={this.clickDialogOpen}
					clickDialogClose={this.clickDialogClose}
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
							<Button start={start} stop={stop} isStartTimer={isStartTimer} toggleStatusTimer={this.toggleStatusTimer}/>
						</>
					)}
				</ReactTimer>
			</div>
		);
	}
}
