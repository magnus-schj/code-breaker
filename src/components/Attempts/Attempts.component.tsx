import { colors, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useAppSelector } from "../../App/hooks";
import { Attempt } from "../../interfaces";

interface Props {}

const Attempts: FC<Props> = () => {
  const code = useAppSelector((state) => state.code);
  const renderPegs = (num: number, isBlack: boolean) => {
    const pegs = [];
    for (let i = 0; i < num; i++) {
      const element = (
        <div
          key={i}
          style={{
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
    <div className="attempts-container">
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
    </div>
  );
};

export default Attempts;
