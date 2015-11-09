
var React = require('react');

var Square = React.createClass({
    propTypes: {
        black: React.PropTypes.bool
    },

    render: function () {
        var fill = this.props.black ? '#c0c0c0' : '#ffffff';
        var style = {
            backgroundColor: fill,
        };

        return <div className="square" style={style}>{this.props.children}</div>;
    }
});

module.exports = Square;
