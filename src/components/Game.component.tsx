import React, { FC, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { PegHolder } from "../interfaces";
import ColourContainer from "./ColourContainer.component";
const Game: FC = () => {
  const initialState = {
    red: { id: "red", hex: "#ff0000" },
    green: { id: "green", hex: "#00ff00" },
    blue: { id: "blue", hex: "#0000ff" },
  };

  const initialPegs: PegHolder[] = [
    { colour: null, id: "holder-0" },
    { colour: null, id: "holder-1" },
    { colour: null, id: "holder-2" },
  ];
  const [colours, setColours] = useState(initialState);
  const [pegHolders, setPegHolders] = useState(initialPegs);
  return (
    <div className="game">
      <DragDropContext onDragEnd={(result) => console.log("result:", result)}>
        <div className="inserting-row">
          {pegHolders.map(({ colour, id }) => {
            return (
              <div className="peg-holder" key={id}>
                <Droppable droppableId={id}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        style={{
                          background: colour ? colour : "grey",
                          height: "100%",
                          width: "100%",
                        }}
                      ></div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </div>
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
