import React from 'react';
import moment from 'moment';

import { FOTMAT } from 'utils/constants';

const INITIAL_TIME = '00:00:00';

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      timeSpend: INITIAL_TIME,
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  start = () => {
    this.interval = setInterval(this._tick, 500);
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
