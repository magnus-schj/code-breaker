import React, { FC, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
const Game: FC = () => {
  const initialState = {
    red: { id: "red", colour: "#ff0000" },
  };

  const [colours, setColours] = useState(initialState);
  console.log(Object.entries(colours));
  return (
    <div className="game">
      <DragDropContext onDragEnd={(result) => console.log("result:", result)}>
        {Object.entries(colours).map(([id, colour]) => {
          return (
            <div
              key={id}
              style={{
                height: "200px",
                width: "200px",
                border: "1px solid black",
              }}
            >
              <Droppable droppableId={id} key={id}>
                {(provided, snapshot) => {
                  return (
                    <div key={id} ref={provided.innerRef}>
                      <Draggable key={id} draggableId={id} index={0}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: "none",
                                padding: 8,
                                background: "grey",
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
        })}
      </DragDropContext>
    </div>
  );
};

export default Game;
