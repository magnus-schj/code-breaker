import { Dispatch, SetStateAction, FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";

import Outputs from "../OutPuts.component";
import Inputs from "../Inputs.component";

import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { initialOutputs } from "../../initialData";
import { addColour, swapColours } from "../../features/inputs/inputs.slice";

interface Props {
  setDisplayWrongCodeMessage: Dispatch<SetStateAction<boolean>>;
}

const DragDrop: FC<Props> = ({ setDisplayWrongCodeMessage }) => {
  const dispatch = useAppDispatch();

  const inputs = useAppSelector((state) => state.inputs);

  const onDragEnd = (res: DropResult) => {
    console.log("res:", res);
    const { destination, draggableId, source } = res;
    if (!destination) return;

    // if the colour is coming from the output
    if (initialOutputs[source.droppableId]) {
      dispatch(addColour({ id: destination.droppableId, hsl: draggableId }));
      return;
    }
    // if the colours are gonna be swapped
    if (inputs[source.droppableId]) {
      const payload = {
        source: [source.droppableId, inputs[source.droppableId].hsl],
        dest: [destination.droppableId, inputs[destination.droppableId].hsl],
      };
      dispatch(swapColours(payload));
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Inputs />
      <Outputs />
    </DragDropContext>
  );
};

export default DragDrop;
