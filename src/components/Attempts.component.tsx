import React, { FC } from "react";
import { useAppSelector } from "../App/hooks";
import { Attempt } from "../interfaces";

interface Props {}

const Attempts: FC<Props> = () => {
  const code = useAppSelector((state) => state.code);
  const renderPegs = (num: number, isBlack: boolean) => {
    const pegs = [];
    for (let i = 0; i < num; i++) {
      const element = (
        <div
          style={{
            height: "0.5rem",
            width: "0.5rem",
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
    <div>
      {code.attempts.map(({ black, white }, i) => (
        <div className="attempt">
          <ul>Attempt number {i + 1}</ul>
          <div className="attempt-pegs">
            {renderPegs(black, true)}
            {renderPegs(white, false)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Attempts;
