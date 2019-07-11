import React from 'react';
import ReactTimer from 'react-compound-timer';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';
import './Timer.scss';

export default class Timer extends React.Component {
	constructor() {
		super();
		this.state = {
			isTimerRun: false,
			taskName: '',
		};
	}

	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

	startTimer = start => {
		start();
		this.setState({ isTimerRun: true });
	};

	stopTimer = stop => {
		stop();
		this.setState({ isTimerRun: false });
	};
	getFormatValue = (value, text = ':') =>
		`${value < 10 ? `0${value}` : value}${text}`;

	render() {
		return (
			<div className="timer__wrapper">
				<TextField
					value={this.state.taskName}
					onChange={this.handleChange('taskName')}
					placeholder="Name of your task"
				/>
				<Paper className="timer">
					<ReactTimer
						startImmediately={false}
						formatValue={value => this.getFormatValue(value)}
					>
						{({ start, stop }) => (
							<>
								<ReactTimer.Hours
									formatValue={value => this.getFormatValue(value)}
								/>
								<ReactTimer.Minutes />
								<ReactTimer.Seconds
									formatValue={value => this.getFormatValue(value, '')}
								/>
								{!this.state.isTimerRun ? (
									<Button
										variant="contained"
										className={'btn'}
										onClick={() => this.startTimer(start)}
									>
										Start
									</Button>
								) : (
									<Button
										variant="contained"
										className={'btn'}
										onClick={() => this.stopTimer(stop)}
									>
										Stop
									</Button>
								)}
							</>
						)}
					</ReactTimer>
				</Paper>
			</div>
		);
	}
}
