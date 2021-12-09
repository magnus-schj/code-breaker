import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

interface Props {}

const Victory: FC<Props> = () => {
  const pad = useMediaQuery("(max-width:714px");
  const phone = useMediaQuery("(max-width:380px");

  const variant = phone ? "h6" : pad ? "h2" : "h1";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant={variant} color="initial">
        Congratulations! You won!
      </Typography>
    </div>
  );
};

export default Victory;
