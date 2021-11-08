import React, { FC } from "react";
import { Peg } from "../interfaces";
import { Droppable } from "react-beautiful-dnd";
import PlacedPeg from "./PlacedPeg.component";

interface Props {
  data: Peg;
}

const PegInput: FC<Props> = ({ data }) => {
  return (
    <div className="peg-input">
      <Droppable droppableId={data.id}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} className="peg-holder">
            {data.peg.map(({ hsl, id, dropId }: any, i: number) => (
              <PlacedPeg key={id} hsl={hsl} id={data.id} dropId={dropId} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default PegInput;
