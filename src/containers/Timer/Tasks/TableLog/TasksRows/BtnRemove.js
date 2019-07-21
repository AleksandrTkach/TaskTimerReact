import React from 'react';
import Button from '@material-ui/core/Button';

import { removeTask } from 'store/actions';
import { connect } from 'react-redux';

class BtnRemove extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		const { styleButton, taskIndex, removeTask } = this.props;

		return (
			<>
				<Button
					variant="contained"
					style={styleButton}
					onClick={() => removeTask(taskIndex)}
				>
					Delete
				</Button>
			</>
		);
	}
}

const mapDispatchToProps = {
	removeTask,
};

export default connect(
	null,
	mapDispatchToProps
)(BtnRemove);
