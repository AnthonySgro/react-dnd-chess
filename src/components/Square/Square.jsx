import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import styles from './SquareStyles';

const Square = (props) => {
    const { classes, black, children } = props;
    const style = {
        backgroundColor: black ? '#c0c0c0' : '#ffffff'
    };

    return (
        <div className={classes.square} style={style}>{children}</div>
    );
}

Square.propTypes = {
    black: PropTypes.bool.isRequired
};

Square.defaultProps = {
    black: false
};

export default withStyles(styles)(Square);
