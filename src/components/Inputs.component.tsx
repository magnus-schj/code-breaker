import { Paper } from "@mui/material";
import React, { FC } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useAppSelector } from "../App/hooks";

interface Props {}

const Inputs: FC<Props> = () => {
  const inputs = useAppSelector((state) => state.inputs);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {Object.entries(inputs).map(([key, { hsl }], j) => (
        <Paper
          elevation={3}
          sx={{
            height: "6rem",
            width: "6rem",
            margin: "2rem",
          }}
        >
          <div style={{ height: "100%", width: "100%" }}>
            <Droppable droppableId={key}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {hsl && (
                    <Draggable key={j} draggableId={`${key}${hsl}`} index={j}>
                      {(dragProvided, dragSnapshot) => (
                        <div
                          ref={dragProvided.innerRef}
                          {...dragProvided.dragHandleProps}
                          {...dragProvided.draggableProps}
                        >
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
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default Inputs;
