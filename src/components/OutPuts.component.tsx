import React, { FC } from "react";
import { initialOutputs } from "../initialData";
import { Droppable, Draggable } from "react-beautiful-dnd";

import { Paper } from "@mui/material";

interface Props {}

const Outputs: FC<Props> = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {Object.entries(initialOutputs).map(([key, { hsl }], i) => (
        <Droppable droppableId={key} isDropDisabled>
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              <Draggable key={i} draggableId={key} index={i}>
                {(dragProvided, dragSnapshot) => (
                  <div
                    ref={dragProvided.innerRef}
                    {...dragProvided.dragHandleProps}
                    {...dragProvided.draggableProps}
                  >
                    {/* what appears */}
                    <Paper
                      sx={{
                        height: "5rem",
                        width: "5rem",
                      }}
                    >
                      <div
                        style={{
                          margin: 0,
                          background: `${hsl}`,
                          height: "100%",
                          width: "100%",
                        }}
                      ></div>
                    </Paper>
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </div>
  );
};

export default Outputs;
