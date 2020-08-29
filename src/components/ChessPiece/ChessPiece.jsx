import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { withStyles } from '@material-ui/core';

import Constants from 'Constants';

import styles from './ChessPieceStyles';

class ChessPiece extends React.Component {
    getDefaultProps() {
        return {
            piece: Constants.PieceStrings.WHITE_PAWN
        };
    }
    render() {
        return this.props.connectDragSource(
            <span className={this.props.classes.piece} style={{ opacity: this.props.isDragging ? 0.5 : 1 }}>{this.props.piece}</span>
        );
    }
};

ChessPiece.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    piece: PropTypes.string.isRequired
};

ChessPiece.defaultProps = {
    piece: Constants.PieceStrings.WHITE_PAWN
};

export default DragSource(
    Constants.ItemTypes.PIECE, Constants.DragSources.PIECE, Constants.DragSources.collect
)(withStyles(styles)(ChessPiece));
