import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { connect } from 'react-redux';

import TasksNotFound from './TasksNotFound';
import TasksRows from './TasksRows/TasksRows';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    borderRadius: 0,
  },
  table: {
    minWidth: 650,
  },
}));

const tableHeads = [
  '№',
  'Tasks',
  'Time start',
  'Time end',
  'Time Spend',
  'Info',
  'Delete',
];

const TableLog = ({ tasks }) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {tableHeads.map((tableHead, index) => (
                <TableCell key={`task-header-${index}`} align="center">
                  {tableHead}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.length ? <TasksRows /> : <TasksNotFound />}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

const mapStateToProps = ({ tasks }) => {
  return {
    tasks,
  };
};

export default connect(mapStateToProps)(TableLog);
