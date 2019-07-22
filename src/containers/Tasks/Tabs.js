import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

import './Tabs.scss';

import TasksLog from './TableLog/TableLog';
import TasksChart from './Chart/Chart';

class NavTabs extends React.Component {
	constructor() {
		super();

		this.state = {
			value: 0,
		};
	}

	componentDidMount() {
		this.setState({
			value: this.props.location.pathname === '/tasks/chart' ? 1 : 0,
		});
	}

	handleChange = (event, newValue) => {
		this.setState({
			value: newValue,
		});
	};

	render() {
		const { value } = this.state;
		return (
			<div className="tabs__wrapper">
				<AppBar position="static">
					<Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
						<Tab label="Task Log" component={Link} to="/tasks/log" />
						<Tab label="Task Chart" component={Link} to="/tasks/chart" />
					</Tabs>
				</AppBar>
				<Switch>
					<Route path="/tasks/log" component={TasksLog} />
					<Route path="/tasks/chart" component={TasksChart} />
					<Route component={TasksLog} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(NavTabs);
