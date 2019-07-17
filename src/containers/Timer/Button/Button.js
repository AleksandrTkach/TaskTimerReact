import React from 'react';
import Button from '@material-ui/core/Button/Button';
import './Button.scss';

export default class TimerButton extends React.Component {

	startTimer = () => {
		this.props.start();
		this.props.toggleStatusTimer();
	};

	stopTimer = () => {
		this.props.reset();
		this.props.stop();
		this.props.toggleStatusTimer();
	};

	render() {
		return (
			<>
				{!this.props.isStartTimer ? (
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
