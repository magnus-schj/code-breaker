import React, { FC } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

interface Props {
  id: string;
  colour: string | null;
}

const PegInput: FC<Props> = ({ id, colour }) => {
  console.log("colour:", colour);
  return (
    <div className="peg-holder">
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              style={{
                height: "100%",
                width: "100%",
                background: colour ? colour : "grey",
              }}
            >
              {colour && (
                <Draggable key={id} draggableId={id} index={0}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        style={{
                          background: colour ? colour : "grey",
                          height: "100%",
                          width: "100%",
                          ...provided.draggableProps.style,
                        }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      ></div>
                    );
                  }}
                </Draggable>
              )}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default PegInput;
