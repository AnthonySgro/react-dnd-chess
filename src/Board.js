
var React = require('react');
var BoardSquare = require('./BoardSquare');
var ChessPiece = require('./ChessPiece');
var DnDContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');
var Constants = require('./Constants');

var Board = React.createClass({
    
    getInitialState: function () {
        return {
            turn: Constants.PieceColors.WHITE,
            pieces: Constants.PieceStartingPositions
        };
    },
    
    pieceCanMoveTo: function (pid, destX, destY) {
        var dx, dy, target;
        var p = this.state.pieces[pid];
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
                break;
            case Constants.PieceTypes.KNIGHT:
                return (
                    ( dx == 1 && dy == 2 ) || ( dx == 2 && dy == 1 )
                );
                break;
            case Constants.PieceTypes.BISHOP:
                return (
                    ( dx == dy )
                );
                break;
            case Constants.PieceTypes.QUEEN:
                return (
                    ( dx == dy ) || ( dx > 0 && !dy ) || ( !dx && dy > 0 )
                );
                break;
            case Constants.PieceTypes.KING:
                return (
                    // Ignore rules for castling, etc
                    ( dx > 0 || dy > 0 ) && dx + dy < 2
                );
                break;
            case Constants.PieceTypes.PAWN:
                // Pawns are special: they can only move forward!
                // Black can only increase Y, white can only decrease
                var forward = (
                    ( p.color == Constants.PieceColors.WHITE && p.y - destY > 0 )
                    || ( p.color == Constants.PieceColors.BLACK && p.y - destY < 0 )
                );
                return (
                    // Ignoring rules for capturing
                    forward && !dx && ( dy == 1 || ( !hasMoved && dy == 2 ) )
                );
                break;
        }
        return false;
    },
    movePieceTo: function (pid, destX, destY) {
        if ( this.pieceCanMoveTo(pid, destX, destY) ) {
            var newTurn;
            var pieces = this.state.pieces;
            var piece = pieces[pid];
            piece.x = destX;
            piece.y = destY;
            piece.hasMoved = true;
            pieces[pid] = piece;
            
            if ( this.state.turn == Constants.PieceColors.WHITE ) {
                newTurn = Constants.PieceColors.BLACK;
            }
            else {
                newTurn = Constants.PieceColors.WHITE;
            }
            
            this.setState({ pieces: pieces, turn: newTurn });
        }
    },
    getPieceBySquare: function (x, y) {
        var p, pObj, pieces = this.state.pieces;
        for ( var p in pieces ) {
            if ( pieces[p].x == x && pieces[p].y == y ) {
                pObj = pieces[p];
                pObj.id = p;
                return pObj;
            }
        }
        return false;
    },
    renderPieceInSquare: function (x, y) {
        var piece = this.getPieceBySquare(x, y);
        if ( piece ) {
            return ( <ChessPiece board={this} piece={piece.pieceString} id={piece.id} /> );
        }
        return false;
    },
    renderSquare: function (x, y) {
        return ( <BoardSquare key={ x + y * 8 } x={x} y={y}>{this.renderPieceInSquare(x, y)}</BoardSquare> );
    },
    render: function () {
        var squares = [];
        for ( var y = 0; y < 8; y++ ) {
            for ( var x = 0; x < 8; x++ ) {
                squares.push(this.renderSquare(x, y));
            }
        }
        
        return (
            <div>
                <h1>{this.state.turn}'s Turn</h1>
                <div className="board">
                    {squares}
                </div>
            </div>
        );
    }
});

module.exports = DnDContext(HTML5Backend)(Board);