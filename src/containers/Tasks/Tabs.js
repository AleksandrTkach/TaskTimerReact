import React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TasksLog from './TableLog/TableLog';
import TasksChart from './Chart/Chart';

import { ROUTER } from 'utils/constants';

import './Tabs.scss';

class NavTabs extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTabIndex: 0,
    };
  }

  componentDidMount() {
    this.setState({
      activeTabIndex:
        this.props.location.pathname === ROUTER.tasksChart ? 1 : 0,
    });
  }

  handleChange = (event, activeTabIndex) => {
    this.setState({
      activeTabIndex,
    });
  };

  render() {
    const { activeTabIndex } = this.state;

    return (
      <div className="tabs__wrapper">
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={activeTabIndex}
            onChange={this.handleChange}
          >
            <Tab label="Task Log" component={Link} to={ROUTER.tasksLog} />
            <Tab label="Task Chart" component={Link} to={ROUTER.tasksChart} />
          </Tabs>
        </AppBar>
        <Switch>
          <Route
            exact
            path={[ROUTER.tasksLog, ROUTER.home]}
            component={TasksLog}
          />
          <Route exact path={ROUTER.tasksChart} component={TasksChart} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(NavTabs);
