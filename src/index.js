import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Game from 'components/Game';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);
