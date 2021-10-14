import { FC, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { colourData, pegInputsData } from "../initialData";
import { ColourData, PegInputs, PegInputType } from "../interfaces";
import InputContainer from "./InputContainer.component";
import PegInput from "./PegInput.component";
const Game: FC = () => {
  const [colours, setColours] = useState<ColourData>(colourData);
  const [pegInputs, setPegInputs] = useState<PegInputs>(pegInputsData);

  const onDragEnd = (
    result: DropResult,
    setInputs: React.Dispatch<React.SetStateAction<PegInputs>>
  ) => {
    if (!result.destination) return;
    const { source, destination } = result;

    // gets correct data from state, makes copies, updates state
    const newColourOrigin = { ...colours[source.droppableId] };
    const newColourDest: PegInputType = {
      ...pegInputs[destination.droppableId],
    };
    newColourOrigin.id += newColourDest.id;
    newColourDest.peg.length = 0;
    newColourDest.peg.push(newColourOrigin);
    setInputs({ ...pegInputs, [newColourDest.id]: newColourDest });
  };

  return (
    <div className="game">
      <DragDropContext onDragEnd={(result) => onDragEnd(result, setPegInputs)}>
        <div className="peg-inputs">
          {Object.entries(pegInputs).map(([key, data]) => (
            <PegInput key={key} data={data} />
          ))}
        </div>
        <div className="pickable-pegs">
          {Object.entries(colours).map(([key, data]) => (
            <InputContainer id={key} colour={data} key={key} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Game;
