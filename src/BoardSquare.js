import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

import Constants from 'Constants';
import Square from 'Square';

const BoardSquare = (props) => {
    const { isOver, canDrop, x, y } = props;
    const isBlack = (x + y) % 2 === 1;

    const renderOverlay = () => {
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
    };

    return props.connectDropTarget(
        <div className="board-square">
            <Square key={props.key} black={isBlack}>{props.children}</Square>
            {renderOverlay()}
        </div>
    );
};

BoardSquare.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired
};

export default DropTarget(
    Constants.ItemTypes.PIECE, Constants.DropTargets.SQUARE, Constants.DropTargets.collect
)(BoardSquare);
