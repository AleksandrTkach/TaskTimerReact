import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Table from '@material-ui/core/Table/Table';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { getFormatTime } from 'utils/utils';
import { ROUTER } from 'utils/constants';

import './TaskInfo.scss';

class TaskInfo extends React.Component {
  render() {
    const { tasks, match } = this.props;
    const task = tasks[match.params.id];

    return (
      <div className="task-info__wrapper">
        <Card className="task-info__card">
          <CardHeader title={`${task.taskName}`} />
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell align="left"> Time start: </TableCell>
                  <TableCell align="left">
                    {getFormatTime(task.timeStart)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left"> Time end: </TableCell>
                  <TableCell align="left">
                    {getFormatTime(task.timeEnd)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left"> Time spend: </TableCell>
                  <TableCell align="left">
                    {getFormatTime(task.timeSpend, true)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardActions style={{ justifyContent: 'flex-end' }}>
            <Link to={ROUTER.tasksLog}>
              <Button size="small"> Back </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ tasks }) => {
  return {
    tasks,
  };
};

export default connect(mapStateToProps)(withRouter(TaskInfo));
