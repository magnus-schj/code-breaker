import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Confetti from "./Confetti/Confetti.component";

interface Props {}

const Victory: FC<Props> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1" color="initial">
        Congratulations! You won!
      </Typography>
      <Confetti />
    </div>
  );
};

export default Victory;
