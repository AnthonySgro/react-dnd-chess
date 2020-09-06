import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { withStyles } from '@material-ui/core';

import { AppContext } from 'context';
import Constants from 'Constants';
import Square from 'components/Square';
import Highlight from 'components/Highlight';

import styles from './BoardSquareStyles';

const BoardSquare = (props) => {
  const { pieceCanMoveTo, movePieceTo } = useContext(AppContext);
  const { classes, x, y } = props;
  const isBlack = (x + y) % 2 === 1;
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: Constants.ItemTypes.PIECE,
    drop: (item) => {
      movePieceTo(item.id, x, y);
    },
    canDrop: (item) => pieceCanMoveTo(item.id, x, y),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return (
    <div className={classes.boardSquare} ref={drop}>
      <Square key={props.key} black={isBlack}>{props.children}</Square>
      <Highlight canDrop={canDrop} isOver={isOver} />
    </div>
  );
};

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default withStyles(styles)(BoardSquare);
