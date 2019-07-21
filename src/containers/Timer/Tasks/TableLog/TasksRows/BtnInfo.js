import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import Dialog from 'components/Dialog';

class BtnInfo extends React.Component {
	constructor() {
		super();

		this.state = {
			isOpenDialogInfo: false,
		};
	}

	_toggleDialogInfo = status => this.setState({ isOpenDialogInfo: status });

	render() {
		const { task, styleButton, getFormatTime } = this.props;
		const { isOpenDialogInfo } = this.state;

		return (
			<>
				<Button
					variant="contained"
					style={styleButton}
					onClick={() => this._toggleDialogInfo(true)}
				>
					Info
				</Button>
				<Dialog
					isOpenDialog={isOpenDialogInfo}
					clickDialogClose={() => this._toggleDialogInfo(false)}
					clickDialogSuccess={() => this._toggleDialogInfo(false)}
					dialogTitle={`Task: ${task.taskName}`}
				>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell align="left"> Time start </TableCell>
								<TableCell align="left">
									{getFormatTime(task.timeStart)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left"> Time end </TableCell>
								<TableCell align="left">
									{getFormatTime(task.timeEnd)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left"> Time spend </TableCell>
								<TableCell align="left">
									{getFormatTime(task.timeSpend)}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Dialog>
			</>
		);
	}
}

export default BtnInfo;
