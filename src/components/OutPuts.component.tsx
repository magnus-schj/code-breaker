import React, { FC } from "react";
import { initialOutputs } from "../initialData";
import { Droppable, Draggable } from "react-beautiful-dnd";

import { Paper, useMediaQuery } from "@mui/material";

interface Props {}

const Outputs: FC<Props> = () => {
  // media queries
  const belowBreakpoint = useMediaQuery("(max-width:924px)");
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {Object.entries(initialOutputs).map(([key, { hsl }], i) => (
        <Droppable droppableId={key} isDropDisabled key={key}>
          {(provided, snapshot) => (
            <div style={{ margin: belowBreakpoint ? "0.5rem" : "1rem" }}>
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
                          height: belowBreakpoint ? "3rem" : "6rem",
                          width: belowBreakpoint ? "3rem" : "6rem",
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
