import React, { FC, useState } from "react";

import { useDispatch } from "react-redux";

import { ButtonBase } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { removeColour } from "../features/inputs/inputs.slice";

interface Props {
  hsl: string;
  dropId: string;
}

const PlacedPeg: FC<Props> = ({ hsl, dropId }) => {
  const dispatch = useDispatch();
  // delete icon focused or not
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={(e) => {
        setHover(true);
      }}
      onMouseLeave={() => setHover(false)}
    >
      <ButtonBase
        style={{
          height: "3rem",
          width: "3rem",
          background: hsl,
        }}
        onClick={() => dispatch(removeColour(dropId))}
      >
        <Delete style={{ display: hover ? "block" : "none" }} />
      </ButtonBase>
    </div>
  );
};

export default PlacedPeg;
