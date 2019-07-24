import React from 'react';
import Button from '@material-ui/core/Button/Button';

import { connect } from 'react-redux';
import { buildChart } from 'store/modules/chart';
import { setTask, resetTasks, refreshTasks } from 'store/modules/tasks';
import { generateNewTasks, setLS } from 'utils/utils';

import './BtnGenerate.scss';

const BtnGenerate = props => {
  const _generate = async () => {
    await props.resetTasks();
    const newTasks = await generateNewTasks();
    setLS('tasks', newTasks, false);
    await props.refreshTasks(newTasks);
    props.buildChart();
  };

  return (
    <Button
      variant="contained"
      className="btn btn__generate"
      onClick={() => _generate()}
    >
      Generate
    </Button>
  );
};

const mapDispatchToProps = {
  setTask,
  refreshTasks,
  resetTasks,
  buildChart,
};

export default connect(
  null,
  mapDispatchToProps
)(BtnGenerate);
