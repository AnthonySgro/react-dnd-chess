React Chessboard
================

Chessboard built in React, based off the React Drag and Drop tutorial.

Tutorial: http://gaearon.github.io/react-dnd/examples-chessboard-tutorial-app.html

Github: https://github.com/gaearon/react-dnd/tree/master/examples/00%20Chessboard/Tutorial%20App

Purpose was to get a feel for React by expanding the scope of the tutorial to
include multiple pieces all with their own movement rules.


Setup
-----

I've used Node.js and the Node Package Manager to include React and the React DND
packages.  Assuming you already have Node and npm setup, this is done with the 
following command:

    npm install --save react react-dom react-dnd react-dnd-html5-backend

Also used are the Webpack and JSX packages, which can be installed globally.

    npm install -g react-jsx webpack

Once all the tools are in place, simply run the makefile, or the command contained
therein:

    jsx src/ js/  &&  webpack js/main.js bundle.js