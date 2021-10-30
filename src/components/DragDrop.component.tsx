import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { useAppDispatch, useAppSelector } from "../App/hooks";

import {
  ColoursType,
  NewColourOrigin,
  PegInputsType,
  PegInputType,
} from "../interfaces";
import { colourData } from "../initialData";

import Attempts from "./Attempts.component";
import PegInput from "./PegInput.component";
import PegOrigin from "./PegOrigin.component";

import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { addColour } from "../features/inputs/inputs.slice";
import {
  checkIfCodeBroken,
  handleWrongCode,
  useInputChecker,
} from "./Game/utils";
import {
  incrementTries,
  setCodeBroken,
  codeSlice,
  addAttempt,
} from "../features/code/code.slice";

interface Props {
  setDisplayWrongCodeMessage: Dispatch<SetStateAction<boolean>>;
}

const DragDrop: FC<Props> = ({ setDisplayWrongCodeMessage }) => {
  const dispatch = useAppDispatch();

  const [colours, setColours] = useState<ColoursType>(colourData);
  const [allInputsFilled, setAllInputsFilled] = useState(false);

  const inputs = useAppSelector((state) => state.inputs);
  const codeSlice = useAppSelector((state) => state.code);

  useInputChecker(inputs, setAllInputsFilled);

  // onDragEnd
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    // gets correct data from state, makes copies, updates state
    const newColourOrigin: NewColourOrigin = { ...colours[source.droppableId] };
    const newColourDest: PegInputType = {
      ...inputs[destination.droppableId],
    };
    newColourOrigin.dropId = newColourOrigin.id + newColourDest.id;
    newColourDest.peg = [];
    newColourDest.peg.push(newColourOrigin);
    dispatch(addColour(newColourDest));
  };

  const handleClick = (inputs: PegInputsType, code: ColoursType | null) => {
    setDisplayWrongCodeMessage(false);
    dispatch(incrementTries());
    const isCodeBroken = checkIfCodeBroken(inputs, code);

    isCodeBroken
      ? dispatch(setCodeBroken(isCodeBroken))
      : handleWrongCode(setDisplayWrongCodeMessage, codeSlice, inputs, (obj) =>
          dispatch(addAttempt(obj))
        );
  };
  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <div className="inputs-and-attempts">
        <div className="peg-inputs">
          {Object.entries(inputs).map(([key, data]) => (
            <PegInput key={key} data={data} />
          ))}
          {allInputsFilled && (
            <button onClick={() => handleClick(inputs, codeSlice.code)}>
              Check
            </button>
          )}
        </div>
        <Attempts />
      </div>

      <div className="pickable-pegs">
        {Object.entries(colours).map(([key, data]) => (
          <PegOrigin id={key} colour={data} key={key} />
        ))}
      </div>
    </DragDropContext>
  );
};

export default DragDrop;
