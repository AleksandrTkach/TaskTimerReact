import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import TaskInfo from 'components/TaskInfo';
import Timer from 'containers/Timer/Timer';
import Tabs from 'containers/Tasks/Tabs/Tabs';
import NotFound from 'containers/NotFound';

import { ROUTER } from 'utils/constants';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path={[ROUTER.home, ROUTER.tasksLog, ROUTER.tasksChart]} exact>
            <Timer />
            <Tabs />
          </Route>

          <Route path={`${ROUTER.taskInfo}:id`}>
            <TaskInfo />
          </Route>

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Container>
  </Provider>
);

export default App;
