import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import moment from 'moment';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		overflowX: 'auto',
		borderRadius: 0,
	},
	table: {
		minWidth: 650,
	},
}));

const styleButton = {
	background: 'white',
	borderRadius: 0
};

const tableHeads = ['№', 'Tasks', 'Time start', 'Time end', 'Time Spend', 'Info', 'Delete'];

const TaskNotFound = (
	<TableRow>
		<TableCell align="center" colSpan="7">
			Tasks Not Found
		</TableCell>
	</TableRow>
);

const TasksRows = (tasks) => tasks.map((task, index) =>
	(
		<TableRow key={`task-body-${index}`}>
			<TableCell component="th" scope="row">
				{++index}
			</TableCell>
			<TableCell align="left">{task.taskName}</TableCell>
			<TableCell align="center">{getFormatTime(task.timeStart)}</TableCell>
			<TableCell align="center">{getFormatTime(task.timeStart) === getFormatTime(task.timeEnd) ? getFormatTime(task.timeEnd + 1000) : getFormatTime(task.timeEnd)}</TableCell>
			<TableCell align="center">{getFormatTime(task.timeSpend)}</TableCell>
			<TableCell align="center">
				<Button variant="contained" style={styleButton}>
					Info
				</Button>
			</TableCell>
			<TableCell align="center">
				<Button variant="contained" style={styleButton}>
					Delete
				</Button>
			</TableCell>
		</TableRow>
	)
);

const getFormatTime = value => moment.utc(+value).format('HH:mm:ss');

const SimpleTable = ({tasks}) => {
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>

						{tableHeads.map((tableHead, index) =>
									<TableCell key={`task-header-${index}`} align="center">
										{tableHead}
									</TableCell>
						)}

					</TableRow>
				</TableHead>
				<TableBody>

					{tasks.length ? TasksRows(tasks) : TaskNotFound}

				</TableBody>
			</Table>
		</Paper>
	);
};

const mapStateToProps = ({tasks}) => {
	return {
		tasks,
	};
};

export default connect(
	mapStateToProps,
)(SimpleTable);
