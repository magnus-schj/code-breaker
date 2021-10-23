import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../App/hooks";

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
import { useDispatch } from "react-redux";
import {
  incrementTries,
  makeCode,
  setCodeBroken,
} from "../../features/code/code.slice";
import { generateCode, checkIfCodeBroken, useInputChecker } from "./utils";

const Game: FC = () => {
  const dispatch = useDispatch();

  const [colours, setColours] = useState<ColoursType>(colourData);
  const [allInputsFilled, setAllInputsFilled] = useState(false);
  const [displayWrongCodeMessage, setDisplayWrongCodeMessage] = useState(false);

  const inputs = useAppSelector((state) => state.inputs);
  const code = useAppSelector((state) => state.code);

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
      : setDisplayWrongCodeMessage(true);
  };
  return (
    <div className="game">
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <div className="peg-inputs">
          {Object.entries(inputs).map(([key, data]) => (
            <PegInput key={key} data={data} />
          ))}
          {allInputsFilled && (
            <button onClick={() => handleClick(inputs, code.code)}>
              Check
            </button>
          )}
        </div>
        <div className="pickable-pegs">
          {Object.entries(colours).map(([key, data]) => (
            <PegOrigin id={key} colour={data} key={key} />
          ))}
        </div>
      </DragDropContext>
      {code.codeBroken && (
        <>
          <></>
          <h1>Gratulerer! du vant!</h1>
          <h2>Du klarte det på {code.numTries} forsøk</h2>
        </>
      )}
      {displayWrongCodeMessage && <h1>Feil! Prøv igjen!</h1>}
    </div>
  );
};

export default Game;
