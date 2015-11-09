
exports.ItemTypes = {
    KNIGHT: 'knight'
};

exports.PieceTypes = {
    PAWN: 'pawn',
    KNIGHT: 'knight',
    ROOK: 'rook'
}

exports.DragSources = {
    collect: function (connect, monitor) {
        return {
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging()
        }
    },
    PIECE: {
        beginDrag: function (props, connect, monitor) {
            console.log('beginDrag', props);
            return { 
                id: props.id,
                itemType: props.itemType,
                board: props.board
            };
        }
    }
};

exports.DropTargets = {
    collect: function (connect, monitor) {
        return {
            connectDropTarget: connect.dropTarget(),
            isOver: monitor.isOver()
        }
    },
    SQUARE: {
        canDrop: function(props, monitor) {
            console.log('canDrop', props, monitor.getItem());
            return true;
        },
        drop: function (props) {
            console.log('dropped', props);
        }
    }
};
