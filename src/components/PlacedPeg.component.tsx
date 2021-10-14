import { ButtonBase } from "@material-ui/core";
import React, { FC } from "react";

interface Props {
  hsl: string;
}

const PlacedPeg: FC<Props> = ({ hsl }) => {
  return (
    <ButtonBase
      style={{
        height: "3rem",
        width: "3rem",
        background: hsl,
      }}
    ></ButtonBase>
  );
};

export default PlacedPeg;
