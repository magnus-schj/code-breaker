import React, { FC } from "react";
import { PegInputType } from "../interfaces";
import { Droppable } from "react-beautiful-dnd";
import PlacedPeg from "./PlacedPeg.component";

interface Props {
  data: PegInputType;
}

const PegInput: FC<Props> = ({ data }) => {
  return (
    <div className="peg-input">
      <Droppable droppableId={data.id}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} className="peg-holder">
            {data.peg.map(({ hsl, id }: any, i: number) => (
              <PlacedPeg key={id} hsl={hsl} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default PegInput;
