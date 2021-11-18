import React, { Dispatch, FC, SetStateAction } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../../App/hooks";

import { Button, Paper, useMediaQuery } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  codeSlice,
  incrementTries,
  setCodeBroken,
  addAttempt,
} from "../../features/code/code.slice";
import { checkIfCodeBroken, createAttempt } from "./inputs.utils";
interface Props {
  allInputsFilled: boolean;
  setDisplayWrongCodeMessage: Dispatch<SetStateAction<boolean>>;
}

const Inputs: FC<Props> = ({ allInputsFilled, setDisplayWrongCodeMessage }) => {
  // dispatch and selector
  const dispatch = useAppDispatch();
  const inputs = useAppSelector((state) => state.inputs);
  const codeSlice = useAppSelector((state) => state.code);

  // media queries
  const belowBreakpoint = useMediaQuery("(max-width:924px)");

  const handleClick = () => {
    // ? todo: remove wrongInputMessage
    if (codeSlice.codeBroken) return;
    setDisplayWrongCodeMessage(false);
    dispatch(incrementTries());
    const { code } = codeSlice;
    const isCodeBroken = checkIfCodeBroken(inputs, code);

    createAttempt(codeSlice, inputs, (obj) => dispatch(addAttempt(obj)));
    isCodeBroken
      ? dispatch(setCodeBroken(isCodeBroken))
      : setDisplayWrongCodeMessage(true);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          height: belowBreakpoint ? "3rem" : "6rem",
          width: belowBreakpoint ? "3rem" : "6rem",
          margin: belowBreakpoint ? "1" : "2rem",
        }}
      >
        <Droppable droppableId="delete">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "grey",
              }}
            >
              <DeleteIcon />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Paper>
      {Object.entries(inputs).map(([key, { hsl }], j) => (
        <Paper
          elevation={3}
          sx={{
            height: belowBreakpoint ? "3rem" : "6rem",
            width: belowBreakpoint ? "3rem" : "6rem",
            margin: belowBreakpoint ? "1" : "2rem",
          }}
          key={key}
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
                              height: belowBreakpoint ? "2.5rem" : "5rem",
                              width: belowBreakpoint ? "2.5rem" : "5rem",
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
      <div>
        {allInputsFilled && (
          <Button
            onClick={handleClick}
            variant="contained"
            disabled={codeSlice.codeBroken}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default Inputs;
