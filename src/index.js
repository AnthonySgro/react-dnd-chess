import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Board from 'components/Board/';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Board />
  </React.StrictMode>,
  document.getElementById('root')
);
