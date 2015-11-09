
var React = require('react');
var DropTarget = require('react-dnd').DropTarget;
var Square = require('./Square');
var Constants = require('./Constants');

var BoardSquare = React.createClass({
    propTypes: {
        x: React.PropTypes.number.isRequired,
        y: React.PropTypes.number.isRequired,
        isOver: React.PropTypes.bool.isRequired,
        canDrop: React.PropTypes.bool.isRequired,
        connectDropTarget: React.PropTypes.func.isRequired
    },
    renderOverlay: function () {
        var isOver = this.props.isOver;
        var canDrop = this.props.canDrop;
        if ( isOver ) {
            if ( canDrop ) {
                return <div className="highlight valid-move" />;
            }
            else {
                return <div className="highlight invalid-move" />;
            }
        }
        else if ( canDrop ) {
            return <div className="highlight suggest" />;
        }
        return false;
    },
    render: function () {
        var isBlack = ( this.props.x + this.props.y ) % 2 == 1;
        
        return this.props.connectDropTarget(
            <div className="board-square">
                <Square key={this.props.key} black={isBlack}>{this.props.children}</Square>
                {this.renderOverlay()}
            </div>
        );
    }
});

module.exports = DropTarget(
    Constants.ItemTypes.PIECE, Constants.DropTargets.SQUARE, Constants.DropTargets.collect
)(BoardSquare);
