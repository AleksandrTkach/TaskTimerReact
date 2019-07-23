import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Timer from 'containers/Timer/Timer';
import TaskInfo from 'containers/Tasks/Tabs';
import NotFound from 'containers/NotFound';

class Router extends React.Component {
  render() {
    console.log('this.props: ', this.props);

    const isShow =
      this.props.location.pathname === '/tasks/log' ||
      this.props.location.pathname === '/tasks/chart'
        ? { display: 'block' }
        : { display: 'none' };

    return (
      <>
        <div style={isShow}>
          <Timer />
          <TaskInfo />
        </div>
        <Route component={NotFound} />
      </>
    );
  }
}

export default withRouter(Router);
