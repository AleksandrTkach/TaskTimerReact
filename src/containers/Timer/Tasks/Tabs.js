import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import TasksLog from './Log';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

function LinkTab(props) {
	return (
		<Tab
			component="a"
			onClick={event => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function NavTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	return (
		<div className={`${classes.root} w-100`}>
			<AppBar position="static">
				<Tabs variant="fullWidth" value={value} onChange={handleChange}>
					<LinkTab label="Tasks Log" href="/tasks/log" />
					<LinkTab label="Tasks Chart" href="/tasks/chart" />
				</Tabs>
			</AppBar>
			{value === 0 && <TasksLog/>}
			{value === 1 && <TabContainer>Page Two</TabContainer>}
		</div>
	);
}
