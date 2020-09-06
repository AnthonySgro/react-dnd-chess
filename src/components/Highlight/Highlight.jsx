import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import styles from './HighlightStyles';

const Highlight = (props) => {
  const { classes, isOver, canDrop } = props;
  let classCol = [classes.highlight];
  
  if (!isOver && !canDrop) {
    return false;
  }

  if (isOver) {
    if (canDrop) {
      classCol.push(classes.validMove);
    }
    else {
      classCol.push(classes.invalidMove);
    }
  }
  else if (canDrop) {
    classCol.push(classes.suggest);
  }

  return (
    <div className={classCol.join(' ')} />
  );
};

Highlight.propTypes = {
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  classes: PropTypes.object
};

export default withStyles(styles)(Highlight);
