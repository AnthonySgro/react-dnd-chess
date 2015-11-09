
var React = require('react');
var Constants = require('./Constants');
var DragSource = require('react-dnd').DragSource;

var knightSource = Constants.DragSources.PIECE;
var collect = Constants.DragSources.collect;


var Knight = React.createClass({
    propTypes: {
        connectDragSource: React.PropTypes.func.isRequired,
        isDragging: React.PropTypes.bool.isRequired
    },
    
    getDefaultProps: function () {
        return {
            itemType: Constants.ItemTypes.KNIGHT
        };
    },
    canMove: function (dx, dy) {
        return ( 
            (Math.abs(dx) == 1 && Math.abs(dy) == 2) || 
            (Math.abs(dx) == 2 && Math.abs(dy) == 1)
        );
    },
    render: function () {
        console.log('knight time', this.props);
        return this.props.connectDragSource(
            <span className="piece" style={{ opacity: this.props.isDragging ? 0.5 : 1 }}>♘</span>
        );
    }
});

module.exports = DragSource(Constants.ItemTypes.KNIGHT, knightSource, collect)(Knight);
