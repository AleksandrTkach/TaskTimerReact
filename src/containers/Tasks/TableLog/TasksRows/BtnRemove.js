import React from 'react';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { removeTask } from 'store/actions';

import Dialog from 'components/Dialog';

class BtnRemove extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpenDialogRemove: false,
    };
  }

  _toggleDialogRemove = status => this.setState({ isOpenDialogRemove: status });

  render() {
    const { isOpenDialogRemove } = this.state;
    const { styleButton, taskIndex, removeTask } = this.props;

    return (
      <>
        <Button
          variant="contained"
          style={styleButton}
          onClick={() => this._toggleDialogRemove(true)}
        >
          Delete
        </Button>

        <Dialog
          isOpenDialog={isOpenDialogRemove}
          clickDialogClose={() => this._toggleDialogRemove(false)}
          clickDialogSuccess={() => {
            this._toggleDialogRemove(false);
            removeTask(taskIndex);
          }}
          btnRejectText="No"
          btnSuccessText="Yes"
          dialogTitle="You are sure?"
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  removeTask,
};

export default connect(
  null,
  mapDispatchToProps
)(BtnRemove);
