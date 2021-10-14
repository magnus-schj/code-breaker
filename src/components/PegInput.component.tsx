import React, { FC } from "react";
import { PegInputType } from "../interfaces";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  data: PegInputType;
}

const PegInput: FC<Props> = ({ data }) => {
  return (
    <div
      style={{
        height: "3rem",
        width: "3rem",
        border: "1px solid black",
        overflow: "hidden",
      }}
    >
      <Droppable droppableId={data.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              background: "grey",
              height: "3rem",
              width: "3rem",
            }}
          >
            {data.peg.map(({ hsl, id }: any, i: number) => (
              <div
                style={{
                  height: "3rem",
                  width: "3rem",
                  background: hsl,
                }}
                key={id}
              ></div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default PegInput;
