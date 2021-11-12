import { Dispatch, SetStateAction, FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";

import Outputs from "../OutPuts.component";
import Inputs from "../Inputs.component";

import { DragDropContext } from "react-beautiful-dnd";

interface Props {
  setDisplayWrongCodeMessage: Dispatch<SetStateAction<boolean>>;
}

const DragDrop: FC<Props> = ({ setDisplayWrongCodeMessage }) => {
  const dispatch = useAppDispatch();

  return (
    <DragDropContext onDragEnd={(result) => console.log(result)}>
      <Inputs />
      <Outputs />
    </DragDropContext>
  );
};

export default DragDrop;
