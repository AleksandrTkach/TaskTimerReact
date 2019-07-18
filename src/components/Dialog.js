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
			isDisabledDialogSuccess,
			dialogTitle = '',
			dialogContentText,
			isOpenDialog,
			clickDialogClose,
			clickDialogSuccess,
			btnSuccessText='Save',
		} = this.props;

		console.log('isDisabledSuccess: ', isDisabledDialogSuccess);
		return (
				<Dialog open={isOpenDialog} onClose={clickDialogClose} aria-labelledby="form-dialog-title">

					<DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>

					<DialogContent>
						<DialogContentText>{dialogContentText}</DialogContentText>
						{this.props.children}
					</DialogContent>

					<DialogActions>
						<Button onClick={clickDialogSuccess} disabled={isDisabledDialogSuccess} color="primary">
							{btnSuccessText}
						</Button>
					</DialogActions>

				</Dialog>
		);
	}
}

export default FormDialog;
