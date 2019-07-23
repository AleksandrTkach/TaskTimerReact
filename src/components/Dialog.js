import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends React.Component {
	render() {
		const {
			dialogTitle = '',
			dialogContentText,
			isOpenDialog,
			clickDialogClose,
			clickDialogSuccess,
			btnSuccessText = 'Close',
			btnRejectText = null,
		} = this.props;

		return (
			<Dialog
				open={isOpenDialog}
				onClose={clickDialogClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>

				<DialogContent>
					<DialogContentText>{dialogContentText}</DialogContentText>
					{this.props.children}
				</DialogContent>

				<DialogActions>
					{btnRejectText !== null ? (
						<Button onClick={clickDialogClose} color="primary">
							{btnRejectText}
						</Button>
					) : null}
					<Button onClick={clickDialogSuccess} color="primary">
						{btnSuccessText}
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default FormDialog;
