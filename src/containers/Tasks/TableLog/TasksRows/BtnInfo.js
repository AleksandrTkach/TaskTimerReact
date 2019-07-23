import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ROUTER } from 'utils/constants';

class BtnInfo extends React.Component {
  render() {
    const { styleButton, index } = this.props;

    return (
      <Link to={`${ROUTER.taskInfo}${index}`}>
        <Button variant="contained" style={styleButton}>
          Info
        </Button>
      </Link>
    );
  }
}

export default BtnInfo;
