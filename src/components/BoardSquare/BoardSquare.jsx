import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { withStyles } from '@material-ui/core';

import Constants from 'Constants';
import Square from 'components/Square';
import Highlight from 'components/Highlight';

import styles from './BoardSquareStyles';

const BoardSquare = (props) => {
    const { classes, isOver, canDrop, x, y } = props;
    const isBlack = (x + y) % 2 === 1;

    return props.connectDropTarget(
        <div className={classes.boardSquare}>
            <Square key={props.key} black={isBlack}>{props.children}</Square>
            <Highlight canDrop={canDrop} isOver={isOver} />
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
)(withStyles(styles)(BoardSquare));
