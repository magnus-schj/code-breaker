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
    pickRed: { id: "pickRed", hex: "#ff0000" },
    pickGreen: { id: "pickGreen", hex: "#00ff00" },
    pickBlue: { id: "pickBlue", hex: "#0000ff" },
  };

  const initialPegs = {
    0: { colour: null },
    1: { colour: null },
    2: { colour: null },
  };
  const [colours, setColours] = useState(initialState);
  const [pegHolders, setPegHolders] = useState(initialPegs);

  const onDragEnd = (
    result: DropResult,
    pegHolders: any,
    setPegHolders: any
  ) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (destination.droppableId.includes("pick")) return;

    const pegDest = pegHolders[destination.droppableId];
    setPegHolders({
      ...pegHolders,
      [destination.droppableId]: {
        ...pegDest,
        colour: colours[source.droppableId].hex,
      },
    });
  };
  return (
    <div className="game">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, pegHolders, setPegHolders)}
      >
        <div className="inserting-row">
          {Object.entries(pegHolders).map(([id, { colour }]) => {
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
