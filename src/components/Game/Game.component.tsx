import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";

import {
  ColoursType,
  NewColourOrigin,
  PegInputsType,
  PegInputType,
} from "../../interfaces";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { colourData } from "../../initialData";
import PegOrigin from "../PegOrigin.component";
import PegInput from "../PegInput.component";
import { addColour } from "../../features/inputs/inputs.slice";
import {
  addAttempt,
  incrementTries,
  makeCode,
  setCodeBroken,
} from "../../features/code/code.slice";
import {
  generateCode,
  checkIfCodeBroken,
  useInputChecker,
  handleWrongCode,
} from "./utils";
import Attempts from "../Attempts.component";

const Game: FC = () => {
  const dispatch = useAppDispatch();

  const [colours, setColours] = useState<ColoursType>(colourData);
  const [allInputsFilled, setAllInputsFilled] = useState(false);
  const [displayWrongCodeMessage, setDisplayWrongCodeMessage] = useState(false);

  const inputs = useAppSelector((state) => state.inputs);
  const codeSlice = useAppSelector((state) => state.code);

  useEffect(() => {
    // make a code
    const keys = Object.keys(inputs);
    dispatch(makeCode(generateCode(keys, colours)));
  }, []);

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
    <div className="game">
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
      {codeSlice.codeBroken && (
        <>
          <h1>Gratulerer! du vant!</h1>
          <h2>Du klarte det på {codeSlice.numTries} forsøk</h2>
        </>
      )}
      {displayWrongCodeMessage && <h1>Feil! Prøv igjen!</h1>}
    </div>
  );
};

export default Game;
