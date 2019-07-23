import React from 'react';
import ReactTimer from 'react-compound-timer';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';

import { connect } from 'react-redux';
import { setTask } from 'store/modules/tasks';
import { getLS, setLS, currentTime } from 'utils/utils';
import Dialog from 'components/Dialog';

import './Timer.scss';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      initialTime: 0,
      isStartTimer: false,
      isOpenDialogNoName: false,
    };
  }

  async componentDidMount() {
    const isStartTimer = getLS('isStartTimer');
    const timeSpend = getLS('timeSpend');

    const initialTime = isStartTimer
      ? currentTime() - getLS('timeStart') + timeSpend
      : timeSpend;

    await this.setState({
      initialTime,
      isStartTimer,
    });
  }

  toggleStatusTimer = (start, stop, reset) => {
    if (this.state.isStartTimer) {
      if (this.state.taskName === '') {
        this._toggleDialogTaskNoName(true);
      } else {
        stop();
        this._addTaskLog(reset);
      }
    } else {
      start();
      setLS('isStartTimer', 1);
      setLS('timeStart', currentTime());
      this.setState({
        isStartTimer: true,
      });
    }
  };

  handleChangeTaskName = event => {
    this.setState({
      taskName: event.target.value,
    });
  };

  _addTaskLog = reset => {
    const taskName = this.state.taskName;
    const timeStart = getLS('timeStart');
    let timeSpend = currentTime() - timeStart;
    let timeEnd = timeStart + timeSpend;

    const sec = 1000;
    if (timeSpend < sec && timeStart) {
      timeSpend = sec;
    }

    this.props.setTask({
      taskName,
      timeStart,
      timeEnd,
      timeSpend,
    });

    this.setState({
      taskName: '',
      initialTime: 0,
      isStartTimer: false,
      isOpenDialogNoName: false,
    });

    setLS('timeSpend', 0);
    setLS('isStartTimer', 0);

    reset();
  };

  _toggleDialogTaskNoName = status =>
    this.setState({ isOpenDialogNoName: status });
  _getFormatValue = (value, text = ':') =>
    `${value < 10 ? `0${value}` : value}${text}`;

  render() {
    const {
      taskName,
      initialTime,
      isStartTimer,
      isOpenDialogNoName,
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

        <ReactTimer
          initialTime={initialTime}
          startImmediately={isStartTimer}
          formatValue={value => this._getFormatValue(value)}
        >
          {({ start, stop, reset }) => (
            <>
              <TextField
                value={taskName}
                onChange={this.handleChangeTaskName}
                placeholder="Name of your task"
                className="timer__input"
              />
              <Paper className="timer">
                <ReactTimer.Hours
                  formatValue={value => this._getFormatValue(value)}
                />
                <ReactTimer.Minutes />
                <ReactTimer.Seconds
                  formatValue={value => this._getFormatValue(value, '')}
                />
              </Paper>
              <Button
                variant="contained"
                className="btn"
                onClick={() => this.toggleStatusTimer(start, stop, reset)}
              >
                {!isStartTimer ? 'Start' : 'Stop'}
              </Button>
            </>
          )}
        </ReactTimer>
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
