import React from 'react';
import ReactTimer from 'react-compound-timer';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from './Button/Button';
import './Timer.scss';

export default class Timer extends React.Component {
	constructor() {
		super();
		this.state = {
			taskName: '',
		};
	}

	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
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

				<ReactTimer
					startImmediately={false}
					formatValue={value => this.getFormatValue(value)}
				>
					{({ start, stop }) => (
						<>
							<Paper className="timer">
								<ReactTimer.Hours
									formatValue={value => this.getFormatValue(value)}
								/>
								<ReactTimer.Minutes />
								<ReactTimer.Seconds
									formatValue={value => this.getFormatValue(value, '')}
								/>
							</Paper>
							<Button start={start} stop={stop} />
						</>
					)}
				</ReactTimer>
			</div>
		);
	}
}
