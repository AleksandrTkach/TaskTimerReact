import React from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { getFormatTime } from 'utils/utils';

import BtnInfo from './BtnInfo';
import BtnRemove from './BtnRemove';

const styleButton = {
  background: 'white',
  borderRadius: 0,
};

class TasksRows extends React.Component {
  _getTimeEnd = task =>
    getFormatTime(task.timeStart) === getFormatTime(task.timeEnd)
      ? getFormatTime(task.timeEnd + 1000)
      : getFormatTime(task.timeEnd);

  render() {
    return (
      <>
        {this.props.tasks.map((task, index) => (
          <TableRow key={`task-body-${index}`}>
            <TableCell component="th" scope="row">
              {++index}
            </TableCell>
            <TableCell align="left">{task.taskName}</TableCell>
            <TableCell align="center">
              {getFormatTime(task.timeStart)}
            </TableCell>
            <TableCell align="center">{this._getTimeEnd(task)}</TableCell>
            <TableCell align="center">
              {getFormatTime(task.timeSpend, true)}
            </TableCell>
            <TableCell align="center">
              <BtnInfo
                index={--index}
                task={task}
                styleButton={styleButton}
                getFormatTime={getFormatTime}
              />
            </TableCell>
            <TableCell align="center">
              <BtnRemove taskIndex={index} styleButton={styleButton} />
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  }
}

const mapStateToProps = ({ tasks }) => {
  return {
    tasks,
  };
};

export default connect(mapStateToProps)(TasksRows);
