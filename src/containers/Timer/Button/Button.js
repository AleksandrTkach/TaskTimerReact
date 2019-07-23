import React from 'react';
import Button from '@material-ui/core/Button/Button';
import './Button.scss';

export default class TimerButton extends React.Component {
  render() {
    return (
      <Button
        variant="contained"
        className={'btn'}
        onClick={() =>
          this.props.toggleStatusTimer(
            this.props.start,
            this.props.stop,
            this.props.reset
          )
        }
      >
        {!this.props.isStartTimer ? 'Start' : 'Stop'}
      </Button>
    );
  }
}
