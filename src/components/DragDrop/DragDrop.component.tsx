import { Dispatch, SetStateAction, FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { InputsData } from "../../interfaces";

import Outputs from "../OutPuts.component";
import Inputs from "../Inputs/Inputs.component";

import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { initialOutputs } from "../../initialData";
import {
  addColour,
  removeColour,
  swapColours,
} from "../../features/inputs/inputs.slice";

interface Props {
  setDisplayWrongCodeMessage: Dispatch<SetStateAction<boolean>>;
}

const DragDrop: FC<Props> = ({ setDisplayWrongCodeMessage }) => {
  const dispatch = useAppDispatch();

  const [allInputsFilled, setAllInputsFilled] = useState(false);
  const inputs = useAppSelector((state) => state.inputs);

  useEffect(() => {
    const checkAllInputsFilled = () => {
      for (const [, input] of Object.entries(inputs)) {
        if (!input.hsl) return false;
      }
      return true;
    };
    if (checkAllInputsFilled()) setAllInputsFilled(true);
    else setAllInputsFilled(false);
  }, [inputs]);

  const onDragEnd = (res: DropResult) => {
    const { destination, draggableId, source } = res;

    const isSourceOutput = Object.entries(initialOutputs).find(
      ([key, { name }]) => name === source.droppableId
    );
    if (
      !destination ||
      (destination.droppableId === "delete" && isSourceOutput)
    )
      return;

    // if the destination is the delete-droppable
    if (destination.droppableId === "delete" && !isSourceOutput) {
      dispatch(removeColour(source.droppableId));
      return;
    }

    // if the colour is coming from the output
    if (initialOutputs[source.droppableId]) {
      dispatch(
        addColour({
          id: destination.droppableId,
          hsl: draggableId,
          name: source.droppableId,
        })
      );
      return;
    }
    // if the colours are gonna be swapped
    if (inputs[source.droppableId]) {
      const payload = {
        source: [
          source.droppableId,
          {
            hsl: inputs[source.droppableId].hsl,
            name: inputs[source.droppableId].name,
          },
        ],
        dest: [
          destination.droppableId,
          {
            hsl: inputs[destination.droppableId].hsl,
            name: inputs[destination.droppableId].name,
          },
        ],
      };
      dispatch(swapColours(payload));
      return;
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Inputs
          allInputsFilled={allInputsFilled}
          setDisplayWrongCodeMessage={setDisplayWrongCodeMessage}
        />
        <Outputs />
      </div>
    </DragDropContext>
  );
};

export default DragDrop;
