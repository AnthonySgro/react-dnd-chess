
var React = require('react');

var Game = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired
    },
    movePiece: function (piece, origin, dest) {
        if ( origin.x >= 0 && origin.y >= 0 && dest.x >= 0 && dest.y >=0 ) {
            return true;
        }
        return false;
    },
    render: function () {
        //return ( <div style={{width: '100%', height: '100%'}}>{this.props.children}</div> );
        return ( <div>{this.props.children}</div> );
    }
});

module.exports = Game;
