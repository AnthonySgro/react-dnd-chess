
var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./Board');
var Game = require('./Game');

ReactDOM.render(<Game><Board knightPosition={{x: 4, y: 3}} /></Game>, document.querySelector('#react-target'));
