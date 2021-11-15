import React, { Dispatch, FC, SetStateAction } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../../App/hooks";

import { Button, Paper } from "@mui/material";
import {
  codeSlice,
  incrementTries,
  setCodeBroken,
  addAttempt,
} from "../../features/code/code.slice";
import { Attempt } from "../../interfaces";
import { checkIfCodeBroken, createAttempt } from "./inputs.utils";
interface Props {
  allInputsFilled: boolean;
  setDisplayWrongCodeMessage: Dispatch<SetStateAction<boolean>>;
}

const Inputs: FC<Props> = ({ allInputsFilled, setDisplayWrongCodeMessage }) => {
  const dispatch = useAppDispatch();
  const inputs = useAppSelector((state) => state.inputs);
  const codeSlice = useAppSelector((state) => state.code);

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
      {Object.entries(inputs).map(([key, { hsl }], j) => (
        <Paper
          elevation={3}
          sx={{
            height: "6rem",
            width: "6rem",
            margin: "2rem",
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
