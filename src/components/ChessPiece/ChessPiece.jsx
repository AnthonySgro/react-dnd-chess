import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { withStyles } from '@material-ui/core';

import Constants from 'Constants';

import styles from './ChessPieceStyles';

const ChessPiece = (props) => {
  const { classes, piece, id } = props;
  const [{isDragging}, drag] = useDrag({
    item: {
      type: Constants.ItemTypes.PIECE,
      id
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <span
      ref={drag}
      className={classes.piece}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >{piece}</span>
  );
};

ChessPiece.propTypes = {
  piece: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

ChessPiece.defaultProps = {
  piece: Constants.PieceStrings.WHITE_PAWN
};

export default withStyles(styles)(ChessPiece);
