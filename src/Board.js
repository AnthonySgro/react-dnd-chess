
var React = require('react');
var BoardSquare = require('./BoardSquare');
var Knight = require('./Knight');
var DnDContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

var Board = React.createClass({
    propTypes: {
        knightPosition: React.PropTypes.shape({
            x: React.PropTypes.number.isRequired,
            y: React.PropTypes.number.isRequired
        }).isRequired
    },
    
    renderSquare: function (x, y) {
        var kp = this.props.knightPosition;
        var piece = ( x == kp.x && y == kp.y ) ?
            <Knight board={this} itemType="test" /> : null;
        
        return ( <BoardSquare key={ x + y * 8 } x={x} y={y}>{piece}</BoardSquare> );
    },
    render: function () {
        var squares = [];
        for ( var y = 0; y < 8; y++ ) {
            for ( var x = 0; x < 8; x++ ) {
                squares.push(this.renderSquare(x, y));
            }
        }
        
        return <div className="board">{squares}</div>;
    }
});

module.exports = DnDContext(HTML5Backend)(Board);