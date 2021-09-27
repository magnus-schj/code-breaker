import React, { FC } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
const Game: FC = () => {
  return (
    <div>
      <DragDropContext></DragDropContext>
    </div>
  );
};

export default Game;
