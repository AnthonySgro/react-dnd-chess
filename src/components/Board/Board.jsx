import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core';

import { AppContext } from 'context';
import BoardSquare from 'components/BoardSquare';
import ChessPiece from 'components/ChessPiece';

import styles from './BoardStyles';

const Board = (props) => {
  const { classes } = props;
  const { getPieceBySquare } = useContext(AppContext);
  let squares = [];
  for ( let y = 0; y < 8; y++ ) {
    for ( let x = 0; x < 8; x++ ) {
      let key = x + y * 8;
      let piece = getPieceBySquare(x, y);
      squares.push(
        <BoardSquare key={key} x={x} y={y}>
          {!!piece && (
            <ChessPiece piece={piece.pieceString} id={piece.id} />
          )}
        </BoardSquare>
      );
    }
  }

  return (
    <div className={classes.board}>
      {squares}
    </div>
  );
};

export default withStyles(styles)(Board);
