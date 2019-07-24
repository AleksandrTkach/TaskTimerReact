import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';

import { connect } from 'react-redux';
import { setTask } from 'store/modules/tasks';
import { getLS, setLS, currentTime } from 'utils/utils';
import Dialog from 'components/Dialog';
import Clock from 'containers/Timer/Clock';

import './Timer.scss';

class Timer extends React.Component {
  constructor() {
    super();

    const isStartTimer = getLS('isStartTimer') || false;
    const timeSpend = isStartTimer ? currentTime() - getLS('timeStart') : 0;

    this.state = {
      taskName: '',
      initialTime: 0,
      isStartTimer,
      isOpenDialogNoName: false,
      timeSpend,
    };
    this.clock = React.createRef();
  }

  componentDidMount() {
    if (this.state.isStartTimer) {
      this.startTimer();
    }
  }

  toggleStatusTimer = () => {
    if (this.state.isStartTimer) {
      if (this.state.taskName === '') {
        this._toggleDialogTaskNoName(true);
      } else {
        this._addTaskLog();
      }
    } else {
      this.startTimer();
      setLS('timeStart', currentTime());
    }
  };

  startTimer = () => {
    this.setState(() => {
      return {
        isStartTimer: true,
        initialTime: currentTime(),
      };
    });
    this.clock.current.start();
    setLS('isStartTimer', 1);
  };

  stopTimer = () => {
    this.clock.current.stop();
    setLS('isStartTimer', 0);
  };

  handleChangeTaskName = event => {
    this.setState({
      taskName: event.target.value,
    });
  };

  _addTaskLog = () => {
    this.stopTimer();

    const { taskName } = this.state;
    const { setTask } = this.props;

    const timeStart = getLS('timeStart');
    let timeSpend = Math.round(currentTime() - timeStart);
    let timeEnd = timeStart + timeSpend;

    const sec = 1000;
    if (timeSpend < sec && timeStart) {
      timeSpend = sec;
    }

    setTask({
      taskName,
      timeStart,
      timeEnd,
      timeSpend,
    });

    this.setState({
      taskName: '',
      isStartTimer: false,
      isOpenDialogNoName: false,
    });
  };

  _toggleDialogTaskNoName = status =>
    this.setState({ isOpenDialogNoName: status });

  render() {
    const {
      taskName,
      initialTime,
      isStartTimer,
      isOpenDialogNoName,
      timeSpend,
    } = this.state;

    return (
      <div className="timer__wrapper">
        <Dialog
          isOpenDialog={isOpenDialogNoName}
          clickDialogOpen={() => this._toggleDialogTaskNoName(true)}
          clickDialogClose={() => this._toggleDialogTaskNoName(false)}
          clickDialogSuccess={() => this._toggleDialogTaskNoName(false)}
          dialogTitle="Empty task name"
          dialogContentText="You are trying close your task without name, please enter the title and try gain!"
        />

        <TextField
          value={taskName}
          onChange={this.handleChangeTaskName}
          placeholder="Name of your task"
          className="timer__input"
        />
        <Paper className="timer">
          <Clock time={initialTime} timeSpend={timeSpend} ref={this.clock} />
        </Paper>
        <Button
          variant="contained"
          className="btn"
          onClick={() => this.toggleStatusTimer()}
        >
          {!isStartTimer ? 'Start' : 'Stop'}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ tasks }) => {
  return {
    tasks,
  };
};

const mapDispatchToProps = {
  setTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
