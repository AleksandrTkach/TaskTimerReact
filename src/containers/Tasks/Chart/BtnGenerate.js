import React from 'react';
import Button from '@material-ui/core/Button/Button';

import { connect } from 'react-redux';
import { setTask, resetTasks, buildChart, refreshTasks } from 'store/actions';
import { generateNewTasks, setLS } from 'utils/utils';

import './BtnGenerate.scss';

class BtnGenerate extends React.Component {
	_generate = async () => {
		await this.props.resetTasks();
		const newTasks = await generateNewTasks();
		setLS('tasks', newTasks, false);
		await this.props.refreshTasks(newTasks);
		this.props.buildChart();
	};

	render() {
		return (
			<Button
				variant="contained"
				className="btn btn__generate"
				onClick={() => this._generate()}
			>
				Generate
			</Button>
		);
	}
}

const mapDispatchToProps = {
	setTask,
	refreshTasks,
	resetTasks,
	buildChart,
};

export default connect(
	null,
	mapDispatchToProps
)(BtnGenerate);
