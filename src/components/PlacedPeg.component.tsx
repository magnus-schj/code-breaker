import React, { FC, useState } from "react";

import { ButtonBase } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

interface Props {
  hsl: string;
}

const PlacedPeg: FC<Props> = ({ hsl }) => {
  // delete icon focused or not
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ButtonBase
        style={{
          height: "3rem",
          width: "3rem",
          background: hsl,
        }}
      >
        <Delete style={{ display: hover ? "block" : "none" }} />
      </ButtonBase>
    </div>
  );
};

export default PlacedPeg;
