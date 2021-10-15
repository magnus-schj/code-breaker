import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../App/hooks";

import { Colour, ColourData, PegInputs, PegInputType } from "../../interfaces";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { colourData, pegInputsData } from "../../initialData";
import PegOrigin from "../PegOrigin.component";
import PegInput from "../PegInput.component";
import { addColour } from "../../features/inputs/inputs.slice";
import { useDispatch } from "react-redux";
import { makeCode } from "../../features/code/code.slice";
import { allInputsFilled, generateCode, useInputChecker } from "./utils";
const Game: FC = () => {
  const dispatch = useDispatch();

  const [colours, setColours] = useState<{ [key: string]: Colour }>(colourData);
  const inputs = useAppSelector((state) => state.inputs);

  useEffect(() => {
    // make a code
    const keys = Object.keys(inputs);
    dispatch(makeCode(generateCode(keys, colours)));
  }, []);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    // gets correct data from state, makes copies, updates state
    const newColourOrigin = { ...colours[source.droppableId] };
    const newColourDest: PegInputType = {
      ...inputs[destination.droppableId],
    };
    newColourOrigin.id += newColourDest.id;
    newColourDest.peg = [];
    newColourDest.peg.push(newColourOrigin);
    dispatch(addColour(newColourDest));
  };
  useInputChecker(inputs);

  return (
    <div className="game">
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <div className="peg-inputs">
          {Object.entries(inputs).map(([key, data]) => (
            <PegInput key={key} data={data} />
          ))}
        </div>
        <div className="pickable-pegs">
          {Object.entries(colours).map(([key, data]) => (
            <PegOrigin id={key} colour={data} key={key} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Game;
