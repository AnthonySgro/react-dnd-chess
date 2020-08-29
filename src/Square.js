import React from 'react';
import PropTypes from 'prop-types';

const Square = (props) => {
    const { black, children } = props;
    const style = {
        backgroundColor: black ? '#c0c0c0' : '#ffffff'
    };

    return (
        <div className="square" style={style}>{children}</div>
    );
}

Square.propTypes = {
    black: PropTypes.bool.isRequired
};

Square.defaultProps = {
    black: false
};

export default Square;
