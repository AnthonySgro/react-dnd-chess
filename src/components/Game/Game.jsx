import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { AppProvider } from 'context';
import Board from 'components/Board';


const Game = () => {
  return (
    <AppProvider>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </AppProvider>
  );
};

export default Game;
