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
        <Droppable droppableId={key} isDropDisabled key={key}>
          {(provided, snapshot) => (
            <div style={{ margin: "clamp(0.5rem, 1rem, 4rem)" }}>
              <div ref={provided.innerRef}>
                <Draggable key={i} draggableId={hsl} index={i}>
                  {(dragProvided, dragSnapshot) => (
                    <div
                      ref={dragProvided.innerRef}
                      {...dragProvided.dragHandleProps}
                      {...dragProvided.draggableProps}
                    >
                      {/* what appears */}
                      <Paper
                        sx={{
                          height: "clamp(2rem, 6rem, 8rem)",
                          width: "clamp(2rem, 6rem, 8rem)",
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
            </div>
          )}
        </Droppable>
      ))}
    </div>
  );
};

export default Outputs;
