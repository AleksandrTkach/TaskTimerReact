import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { connect } from 'react-redux';
import moment from 'moment';

import BtnInfo from './BtnInfo';
import BtnRemove from './BtnRemove';

const styleButton = {
	background: 'white',
	borderRadius: 0,
};

const format = 'HH:mm:ss';

class TasksRows extends React.Component {

	getFormatTime = (value, isUTC) => isUTC
		? moment.utc(+value).format(format)
		: moment(+value).format(format);

	_getTimeEnd = task => {
		return this.getFormatTime(task.timeStart) ===
			this.getFormatTime(task.timeEnd)
			? this.getFormatTime(task.timeEnd + 1000)
			: this.getFormatTime(task.timeEnd);
	};

	render() {
		const { tasks } = this.props;

		return (
			<>
				{tasks.map((task, index) => (
					<TableRow key={`task-body-${index}`}>
						<TableCell component="th" scope="row">
							{++index}
						</TableCell>
						<TableCell align="left">{task.taskName}</TableCell>
						<TableCell align="center">
							{this.getFormatTime(task.timeStart)}
						</TableCell>
						<TableCell align="center">{this._getTimeEnd(task)}</TableCell>
						<TableCell align="center">
							{this.getFormatTime(task.timeSpend, true)}
						</TableCell>
						<TableCell align="center">
							<BtnInfo
								task={task}
								styleButton={styleButton}
								getFormatTime={this.getFormatTime}
							/>
						</TableCell>
						<TableCell align="center">
							<BtnRemove taskIndex={--index} styleButton={styleButton} />
						</TableCell>
					</TableRow>
				))}
			</>
		);
	}
}

const mapStateToProps = ({ tasks }) => {
	return {
		tasks,
	};
};

export default connect(mapStateToProps)(TasksRows);
