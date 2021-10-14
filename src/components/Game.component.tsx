import { FC, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { colourData, pegInputsData } from "../initialData";
import { ColourData, PegInputs, PegInputType } from "../interfaces";
import ColourContainer from "./ColourContainer.component";
const Game: FC = () => {
  const [colours, setColours] = useState<ColourData>(colourData);
  const [pegInputs, setPegInputs] = useState<PegInputs>(pegInputsData);

  const onDragEnd = (
    result: DropResult,
    setInputs: React.Dispatch<React.SetStateAction<PegInputs>>
  ) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const newColourOrigin = { ...colours[source.droppableId] };
    const newColourDest: PegInputType = {
      ...pegInputs[destination.droppableId],
    };
    newColourDest.peg.length = 0;
    newColourDest.peg.push(newColourOrigin);
    setInputs({ ...pegInputs, [newColourDest.id]: newColourDest });
  };
  return (
    <div className="game">
      <DragDropContext onDragEnd={(result) => onDragEnd(result, setPegInputs)}>
        <div className="peg-inputs">
          {Object.entries(pegInputs).map(([id, data]) => (
            <div
              key={id}
              style={{
                padding: "3rem",
                border: "1px solid black",
              }}
            >
              <Droppable droppableId={id}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef}>
                    {data.peg.map((peg) => (
                      <h1>{peg.hsl}</h1>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
        <div className="pickable-pegs">
          {Object.entries(colours).map(([key, data]) => {
            return <ColourContainer id={key} colour={data} key={key} />;
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Game;
