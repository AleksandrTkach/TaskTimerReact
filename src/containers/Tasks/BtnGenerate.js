import React from 'react';
import Button from '@material-ui/core/Button/Button';

export default class BtnGenerate extends React.Component {
	_generate = () => {
		console.log('_generate');
	};

	render() {
		return (
			<Button
				variant="contained"
				className={'btn'}
				onClick={() => this._generate()}
			>
				Generate
			</Button>
		);
	}
}
