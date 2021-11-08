import React, { FC, useState } from "react";

import { useDispatch } from "react-redux";

import { removeColour } from "../features/inputs/inputs.slice";

import { Delete } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";

interface Props {
  hsl: string;
  dropId: string;
  id: string;
}

const PlacedPeg: FC<Props> = ({ hsl, dropId, id }) => {
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
        onClick={() => dispatch(removeColour(id))}
      >
        <Delete style={{ display: hover ? "block" : "none" }} />
      </ButtonBase>
    </div>
  );
};

export default PlacedPeg;
