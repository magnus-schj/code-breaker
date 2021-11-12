import { Dispatch, SetStateAction, FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";

import Outputs from "../OutPuts.component";
import Inputs from "../Inputs.component";

import { DragDropContext, DropResult } from "react-beautiful-dnd";

interface Props {
  setDisplayWrongCodeMessage: Dispatch<SetStateAction<boolean>>;
}

const DragDrop: FC<Props> = ({ setDisplayWrongCodeMessage }) => {
  const dispatch = useAppDispatch();

  const onDragEnd = (res: DropResult) => {
    console.log("res:", res);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Inputs />
      <Outputs />
    </DragDropContext>
  );
};

export default DragDrop;
