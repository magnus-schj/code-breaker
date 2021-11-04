import { Paper, Typography } from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../../App/hooks";
import { Attempt } from "../../interfaces";

const useStyles = makeStyles({
  root: {
    height: "50%",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0.5rem",
    margin: "0.5rem",
  },
});

interface Props {}

const Attempts: FC<Props> = () => {
  const classes = useStyles();

  const code = useAppSelector((state) => state.code);
  const renderPegs = (num: number, isBlack: boolean) => {
    const pegs = [];
    for (let i = 0; i < num; i++) {
      const element = (
        <div
          key={i}
          style={{
            margin: "0.1rem",
            height: "2rem",
            width: "2rem",
            border: "1px solid black",
            background: isBlack ? "black" : "white",
          }}
        ></div>
      );
      pegs.push(element);
    }
    return pegs;
  };
  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="h4" color="initial">
        Attempts left: {code.limit - code.numTries}
      </Typography>
      <div className="attempts">
        {code.attempts.map(({ black, white, colours }, i) => (
          <div className="attempt" key={i}>
            <Typography variant="h5" color="initial">
              {i + 1}:
            </Typography>
            <div className="history">
              {colours?.map((colour, j) => (
                <div
                  key={j}
                  style={{
                    margin: "0.1rem",
                    height: "2rem",
                    width: "2rem",
                    border: "1px solid black",
                    background: colour,
                  }}
                ></div>
              ))}
            </div>
            <div className="attempt-pegs">
              {renderPegs(black, true)}
              {renderPegs(white, false)}
            </div>
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default Attempts;
