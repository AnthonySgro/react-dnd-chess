
var React = require('react');
var Constants = require('./Constants');
var DragSource = require('react-dnd').DragSource;

var ChessPiece = React.createClass({
    propTypes: {
        connectDragSource: React.PropTypes.func.isRequired,
        isDragging: React.PropTypes.bool.isRequired,
        piece: React.PropTypes.string.isRequired
    },
    
    getDefaultProps: function () {
        return {
            piece: Constants.PieceStrings.WHITE_PAWN
        };
    },
    render: function () {
        return this.props.connectDragSource(
            <span className="piece" style={{ opacity: this.props.isDragging ? 0.5 : 1 }}>{this.props.piece}</span>
        );
    }
});

module.exports = DragSource(
    Constants.ItemTypes.PIECE, Constants.DragSources.PIECE, Constants.DragSources.collect
)(ChessPiece);
