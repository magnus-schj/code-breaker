import React, { FC, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import ColourContainer from "./ColourContainer.component";
const Game: FC = () => {
  const initialState = {
    red: { id: "red", hex: "#ff0000" },
    green: { id: "green", hex: "#00ff00" },
    blue: { id: "blue", hex: "#0000ff" },
  };

  const [colours, setColours] = useState(initialState);
  console.log(Object.entries(colours));
  return (
    <div className="game">
      <DragDropContext onDragEnd={(result) => console.log("result:", result)}>
        <div className="pickable-pegs">
          {Object.entries(colours).map(([id, colour]) => {
            return <ColourContainer id={id} colour={colour} key={id} />;
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Game;
