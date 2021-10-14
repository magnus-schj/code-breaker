import React, { FC } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Colour } from "../interfaces";

interface Props {
  id: string;
  colour: Colour;
}

const InputContainer: FC<Props> = ({ id, colour }) => {
  return (
    <div
      key={id}
      style={{
        height: "3rem",
        width: "3rem",
        border: "1px solid black",
        padding: 0,
        margin: "0.5rem",
      }}
    >
      <Droppable droppableId={id} key={id} isDropDisabled>
        {(provided, snapshot) => {
          return (
            <div
              key={id}
              ref={provided.innerRef}
              style={{ height: "100%", background: colour.hsl }}
            >
              <Draggable key={id} draggableId={id} index={0}>
                {(provided, snapshot) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        userSelect: "none",
                        height: "100%",
                        background: colour.hsl,
                        ...provided.draggableProps.style,
                      }}
                    ></div>
                  );
                }}
              </Draggable>
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default InputContainer;
