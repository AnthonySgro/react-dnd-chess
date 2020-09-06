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

  const canCapture = (piece, target) => {
    if ( !target ) {
      return true;
    }
    if ( piece.color !== target.color ) {
      return true;
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
    hasMoved = !!p.hasMoved;
    dx = Math.abs(p.x - destX);
    dy = Math.abs(p.y - destY);
    
    switch (p.pieceType) {
      case Constants.PieceTypes.ROOK:
        return (
          ( dx > 0 && !dy ) || ( !dx && dy > 0 )
        ) && pieceHasPathTo(pid, destX, destY) && canCapture(p, target);
      case Constants.PieceTypes.KNIGHT:
        return (
          ( dx === 1 && dy === 2 ) || ( dx === 2 && dy === 1 )
        ) && canCapture(p, target);
      case Constants.PieceTypes.BISHOP:
        return (
          ( dx === dy )
        ) && pieceHasPathTo(pid, destX, destY) && canCapture(p, target);
      case Constants.PieceTypes.QUEEN:
        return (
          ( dx === dy ) || ( dx > 0 && !dy ) || ( !dx && dy > 0 )
        ) && pieceHasPathTo(pid, destX, destY) && canCapture(p, target);
      case Constants.PieceTypes.KING:
        return (
          // Ignore rules for castling, etc
          ( dx <= 1 && dy <= 1 )
        ) && canCapture(p, target);
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
        ) && pieceHasPathTo(pid, destX, destY);
      default:
        return false;
    }
  };

  const pieceHasPathTo = (pid, destX, destY) => {
    const p = pieces[pid];
    if ( !p ) {
      return false;
    }
    if ( p.color !== turn ) {
      return false;
    }

    const dx = Math.abs(p.x - destX);
    const dy = Math.abs(p.y - destY);
    if ( !dx ) {
      // Moving vertically
      for ( let y = Math.min(p.y, destY), t = Math.max(p.y, destY); y < t; y++ ) {
        let target = getPieceBySquare(p.x, y);
        if ( target && target.id !== pid && target.y !== destY ) {
          return false;
        }
      }
    }
    else if ( !dy ) {
      // Moving horizontally
      for ( let x = Math.min(p.x, destX), t = Math.max(p.x, destX); x < t; x++ ) {
        let target = getPieceBySquare(x, p.y);
        if ( target && target.id !== pid && target.x !== destX ) {
          return false;
        }
      }
    }
    else if ( dx === dy ) {
      // Moving diagonally
      for ( 
        let x = p.x, y = p.y, stepX = (p.x - destX) / dx, stepY = (p.y - destY) / dy;
        ( (stepX > 0) ? x > destX : x < destX ) && ( (stepY > 0) ? y > destY : y < destY );
        x = x - stepX, y = y - stepY
      ) {
        let target = getPieceBySquare(x, y);
        if ( target && target.id !== pid && target.x !== destX ) {
          return false;
        }
      }
    }
    // TODO: Special rules like castling, etc.

    // Either no conflict, or is a piece that doesn't need a path (i.e. knight)
    return true;
  };

  const movePieceTo = (pid, destX, destY) => {
    if ( pieceCanMoveTo(pid, destX, destY) ) {
      capturePiece(pid, destX, destY);
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

  const capturePiece = (pid, destX, destY) => {
    const target = getPieceBySquare(destX, destY);
    if ( target ) {
      setPieces((currentPieces) => {
        currentPieces[target.id] = {
          ...currentPieces[target.id],
          x: undefined,
          y: undefined
        };
        return currentPieces;
      });
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
