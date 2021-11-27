import React, { FC } from "react";
import Typography from "@mui/material/Typography";

interface Props {}

const GameOver: FC<Props> = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1" color="initial">
        Game over!
      </Typography>
    </div>
  );
};

export default GameOver;
