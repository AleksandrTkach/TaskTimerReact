import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends React.Component {
	constructor() {
		super();
		this.state = {
			open: false
		};
	}

	handleClickOpen = () => {
		this.setState({ open:true });
	};

	handleClose = () => {
		this.setState({ open:false });
	};

	render() {

		const {
			btnText,
			dialogTitle = '',
			dialogContentText,
			textFieldPlaceholder,
			textFieldType
		} = this.props;

		return (
			<div>
				<Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
					{btnText}
				</Button>
				<Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
					<DialogContent>
						<DialogContentText>{dialogContentText}</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label={textFieldPlaceholder}
							type={textFieldType}
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleClose} color="primary">
							Save
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default FormDialog;
