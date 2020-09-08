import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import { AppContext } from 'context';
import { BoardCoordinates, PieceTypes } from 'Constants';

import styles from './GameInfoStyles';


const GameInfo = ({ classes }) => {
  const { turn, moves, getPieceById } = useContext(AppContext);

  const formatMove = (move) => {
    if ( !move ) {
      // No move - return an empty string
      return '';
    }

    const piece = getPieceById(move.pid);
    let moveString = '';
    if ( piece.pieceType !== PieceTypes.PAWN ) {
      moveString += piece.pieceString;
    }
    moveString += BoardCoordinates.x[move.fromX] + BoardCoordinates.y[move.fromY];
    if ( move.captured ) {
      const target = getPieceById(move.captured);
      if ( target.pieceType !== PieceTypes.PAWN ) {
        moveString += 'x' + getPieceById(move.captured).pieceString;
      }
      else {
        moveString += 'x';
      }
    }
    else {
      moveString += '-';
    }
    moveString += BoardCoordinates.x[move.destX] + BoardCoordinates.y[move.destY];

    return moveString;
  }

  let moveList = [];
  for ( let x = 0, ln = moves.length; x < ln; x += 2 ) {
    moveList.push(formatMove(moves[x]) + ' ' + formatMove(moves[x + 1]));
  }

  return (
    <div className={classes.panel}>
      <h1>{turn}'s Turn</h1>
      <ol className={classes.list}>
        {moveList.map((move) => (
          <li>{move}</li>
        ))}
      </ol>
    </div>
  );
};

GameInfo.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(GameInfo);
