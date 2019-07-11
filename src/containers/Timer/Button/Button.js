import React from 'react';
import Button from '@material-ui/core/Button/Button';
import './Button.scss';

export default class TimerButton extends React.Component {
	constructor() {
		super();
		this.state = {
			isTimerRun: false,
		};
	}

	startTimer = () => {
		this.props.start();
		this.setState({ isTimerRun: true });
	};

	stopTimer = () => {
		this.props.stop();
		this.setState({ isTimerRun: false });
	};

	render() {
		return (
			<>
				{!this.state.isTimerRun ? (
					<Button
						variant="contained"
						className={'btn'}
						onClick={() => this.startTimer()}
					>
						Start
					</Button>
				) : (
					<Button
						variant="contained"
						className={'btn'}
						onClick={() => this.stopTimer()}
					>
						Stop
					</Button>
				)}
			</>
		);
	}
}
