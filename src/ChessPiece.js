import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

import Constants from 'Constants';

class ChessPiece extends React.Component {
    getDefaultProps() {
        return {
            piece: Constants.PieceStrings.WHITE_PAWN
        };
    }
    render() {
        return this.props.connectDragSource(
            <span className="piece" style={{ opacity: this.props.isDragging ? 0.5 : 1 }}>{this.props.piece}</span>
        );
    }
};

ChessPiece.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    piece: PropTypes.string.isRequired
};

export default DragSource(
    Constants.ItemTypes.PIECE, Constants.DragSources.PIECE, Constants.DragSources.collect
)(ChessPiece);
