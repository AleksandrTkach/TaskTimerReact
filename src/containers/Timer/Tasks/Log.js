import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import moment from 'moment';

const useStyles = makeStyles(theme => ({
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

const rows = JSON.parse(localStorage.getItem('tasks'));

export default function SimpleTable() {
	const classes = useStyles();

	function getFormatTime(value) {
		return moment(+value).format('HH:mm:ss');
	}

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						{
							tableHeads.map(tableHead =>
									<TableCell align='center'> {tableHead} </TableCell>
							)
						}
					</TableRow>
				</TableHead>
				<TableBody>
					{
						rows.length
						? rows.map((row, index) => (
							<TableRow key={`task-${index}`}>
								<TableCell component='th' scope='row'>
									{++index}
								</TableCell>
								<TableCell align='right'>{row.taskName}</TableCell>
								<TableCell align='center'>{getFormatTime(row.timeStart)}</TableCell>
								<TableCell align='center'>{getFormatTime(row.timeEnd)}</TableCell>
								<TableCell align='center'>{getFormatTime(row.timeSpend)}</TableCell>
								<TableCell align='center'>
									<Button variant='contained' style={styleButton}>
										Info
									</Button>
								</TableCell>
								<TableCell align='center'>
									<Button variant='contained' style={styleButton}>
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))
						: <TableRow>
								<TableCell align='center' colSpan='7'>
									Tasks Not Found
								</TableCell>
							</TableRow>
					}
				</TableBody>
			</Table>
		</Paper>
	);
}
