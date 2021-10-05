import React, { FC, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { Colours, PegHolder, PegInputs } from "../interfaces";
import ColourContainer from "./ColourContainer.component";
import PegInput from "./PegInput.component";
const Game: FC = () => {
  const initialState: Colours = {
    pickRed: { id: "pickRed", hsl: "hsl(360,100%,50%)" },
    pickGreen: { id: "pickGreen", hsl: "hsl(240,100%,50%)" },
    pickBlue: { id: "pickBlue", hsl: "hsl(129,100%,50%)" },
  };

  const initialPegs: PegInputs = {
    one: { colour: null },
    two: { colour: null },
    three: { colour: null },
  };
  const [colours, setColours] = useState<Colours>(initialState);
  const [pegInputs, setPegInputs] = useState<PegInputs>(initialPegs);

  const onDragEnd = (result: DropResult, pegInputs: any, setPegInputs: any) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (destination.droppableId.includes("pick")) return;

    const pegDest = pegInputs[destination.droppableId];
    setPegInputs({
      ...pegInputs,
      [destination.droppableId]: {
        ...pegDest,
        colour: colours[source.droppableId].hsl,
      },
    });
  };
  return (
    <div className="game">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, pegInputs, setPegInputs)}
      >
        <div className="inserting-row">
          {Object.entries(pegInputs).map(([id, { colour }]) => {
            return <PegInput key={id} colour={colour} id={id} />;
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
