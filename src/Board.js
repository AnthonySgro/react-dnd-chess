import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Constants from 'Constants';
import BoardSquare from 'BoardSquare';
import ChessPiece from 'ChessPiece';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            turn: Constants.PieceColors.WHITE,
            pieces: Constants.PieceStartingPositions
        };
    }
    
    pieceCanMoveTo(pid, destX, destY) {
        let dx, dy, target, hasMoved;
        const p = this.state.pieces[pid];
        if ( !p ) {
            return false;
        }
        if ( p.color !== this.state.turn ) {
            return false;
        }
        target = this.getPieceBySquare(destX, destY);
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
                var forward = (
                    ( p.color === Constants.PieceColors.WHITE && p.y - destY > 0 )
                    || ( p.color === Constants.PieceColors.BLACK && p.y - destY < 0 )
                );
                return (
                    // Ignoring rules for capturing
                    forward && !dx && ( dy === 1 || ( !hasMoved && dy === 2 ) )
                );
        }
        return false;
    }

    movePieceTo(pid, destX, destY) {
        if ( this.pieceCanMoveTo(pid, destX, destY) ) {
            var newTurn;
            var pieces = this.state.pieces;
            var piece = pieces[pid];
            piece.x = destX;
            piece.y = destY;
            piece.hasMoved = true;
            pieces[pid] = piece;
            
            if ( this.state.turn === Constants.PieceColors.WHITE ) {
                newTurn = Constants.PieceColors.BLACK;
            }
            else {
                newTurn = Constants.PieceColors.WHITE;
            }
            
            this.setState({ pieces: pieces, turn: newTurn });
        }
    }

    getPieceBySquare(x, y) {
        let pObj, pieces = this.state.pieces;
        for ( let p in pieces ) {
            if ( pieces[p].x === x && pieces[p].y === y ) {
                pObj = pieces[p];
                pObj.id = p;
                return pObj;
            }
        }
        return false;
    }

    renderPieceInSquare(x, y) {
        var piece = this.getPieceBySquare(x, y);
        if ( piece ) {
            return ( <ChessPiece board={this} piece={piece.pieceString} id={piece.id} /> );
        }
        return false;
    }

    renderSquare(x, y) {
        return ( <BoardSquare key={ x + y * 8 } x={x} y={y}>{this.renderPieceInSquare(x, y)}</BoardSquare> );
    }

    render() {
        var squares = [];
        for ( var y = 0; y < 8; y++ ) {
            for ( var x = 0; x < 8; x++ ) {
                squares.push(this.renderSquare(x, y));
            }
        }
        
        return (
            <DndProvider backend={HTML5Backend}>
                <div>
                    <h1>{this.state.turn}'s Turn</h1>
                    <div className="board">
                        {squares}
                    </div>
                </div>
            </DndProvider>
        );
    }
};

export default Board;
