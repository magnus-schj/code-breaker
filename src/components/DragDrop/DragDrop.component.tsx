import { Dispatch, SetStateAction, FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";

import Outputs from "../OutPuts.component";
import Inputs from "../Inputs.component";

import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { initialOutputs } from "../../initialData";
import { addColour } from "../../features/inputs/inputs.slice";

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

    if (initialOutputs[source.droppableId]) {
      dispatch(addColour({ id: destination.droppableId, hsl: draggableId }));
      return;
    }
    if (inputs[source.droppableId]) {
      // const hsl = inputs[source.droppableId].hsl;
      // setInputs({
      //   ...inputs,
      //   [source.droppableId]: { value: "", hsl: undefined },
      //   [destination.droppableId]: {
      //     value: "",
      //     hsl: hsl,
      //   },
      // });
      alert("here!");
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
