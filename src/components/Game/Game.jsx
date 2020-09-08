import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { AppProvider } from 'context';
import Board from 'components/Board';
import GameInfo from 'components/GameInfo';


const Game = () => {
  return (
    <AppProvider>
      <DndProvider backend={HTML5Backend}>
        <GameInfo />
        <Board />
      </DndProvider>
    </AppProvider>
  );
};

export default Game;
