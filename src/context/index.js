import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import Constants from 'Constants';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [turn, setTurn] = useState(Constants.PieceColors.WHITE);
  const [pieces, setPieces] = useState(Constants.PieceStartingPositions);

  const getPieceBySquare = (x, y) => {
    for ( let p in pieces ) {
      if ( pieces[p].x === x && pieces[p].y === y ) {
        return { ...pieces[p], id: p };
      }
    }
    return false;
  };

  const pieceCanMoveTo = (pid, destX, destY) => {
    let dx, dy, target, hasMoved;
    const p = pieces[pid];
    if ( !p ) {
      return false;
    }
    if ( p.color !== turn ) {
      return false;
    }
    target = getPieceBySquare(destX, destY);
    if ( target ) {
      // TODO: Check colour, whether capture is possible
      return false;
    }
    hasMoved = !!p.hasMoved;
    dx = Math.abs(p.x - destX);
    dy = Math.abs(p.y - destY);
    
    switch (p.pieceType) {
      case Constants.PieceTypes.ROOK:
        return (
          ( dx > 0 && !dy ) || ( !dx && dy > 0 )
        );
      case Constants.PieceTypes.KNIGHT:
        return (
          ( dx === 1 && dy === 2 ) || ( dx === 2 && dy === 1 )
        );
      case Constants.PieceTypes.BISHOP:
        return (
          ( dx === dy )
        );
      case Constants.PieceTypes.QUEEN:
        return (
          ( dx === dy ) || ( dx > 0 && !dy ) || ( !dx && dy > 0 )
        );
      case Constants.PieceTypes.KING:
        return (
          // Ignore rules for castling, etc
          ( dx > 0 || dy > 0 ) && dx + dy < 2
        );
      case Constants.PieceTypes.PAWN:
        // Pawns are special: they can only move forward!
        // Black can only increase Y, white can only decrease
        let forward = (
          ( p.color === Constants.PieceColors.WHITE && p.y - destY > 0 )
          || ( p.color === Constants.PieceColors.BLACK && p.y - destY < 0 )
        );
        return (
          // Ignoring rules for capturing
          forward && !dx && ( dy === 1 || ( !hasMoved && dy === 2 ) )
        );
      default:
        return false;
    }
  };

  const movePieceTo = (pid, destX, destY) => {
    if ( pieceCanMoveTo(pid, destX, destY) ) {
      setPieces((currentPieces) => {
        currentPieces[pid] = {
          ...currentPieces[pid],
          x: destX,
          y: destY,
          hasMoved: true
        };
        return currentPieces;
      });
      setTurn((turn === Constants.PieceColors.WHITE) ? Constants.PieceColors.BLACK : Constants.PieceColors.WHITE);
    }
  };

  const value = {
    turn,
    setTurn,
    getPieceBySquare,
    pieceCanMoveTo,
    movePieceTo
  };

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node
};
