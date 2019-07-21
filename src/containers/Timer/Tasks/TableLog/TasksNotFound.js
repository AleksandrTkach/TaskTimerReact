import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class TasksNotFound extends React.Component {
	render() {
		return (
			<TableRow>
				<TableCell align="center" colSpan="7">
					Tasks Not Found
				</TableCell>
			</TableRow>
		);
	}
}
