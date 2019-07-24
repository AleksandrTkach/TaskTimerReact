import React from 'react';
import moment from 'moment';

import { FOTMAT } from 'utils/constants';
// import { currentTime, getLS } from 'utils/utils';

const INITIAL_TIME = '00:00:00';

class Clock extends React.Component {
  constructor() {
    super();

    // const isStartTimer = getLS('isStartTimer');
    // const timeSpend = currentTime() - getLS('timeStart');

    // const initialTime = isStartTimer
    //   ? currentTime() - getLS('timeStart') + timeSpend
    //   : 0;
    // console.log('timeSpend: ', timeSpend);
    this.state = {
      timeSpend: INITIAL_TIME,
      // initialTime,
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  start = () => {
    this.interval = setInterval(this._tick, 250);
  };

  stop = () => {
    clearInterval(this.interval);
    this.setState({
      timeSpend: INITIAL_TIME,
    });
  };

  _tick = () => {
    let { time, timeSpend: load } = this.props;

    const timeSpend = moment.utc(new Date() - time + load).format(FOTMAT);

    this.setState({
      timeSpend,
    });
  };

  render() {
    return <>{this.state.timeSpend}</>;
  }
}

export default Clock;
