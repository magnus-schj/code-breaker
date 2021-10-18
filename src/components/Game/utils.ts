import { useEffect } from "react";
import { Colour, PegInputType } from "../../interfaces";

export const generateCode = (
  keys: string[],
  colours: { [key: string]: Colour }
) => {
  const code: { [key: string]: Colour } = {};
  const pickRandomColour = (obj: { [key: string]: Colour }) => {
    const colourKeys = Object.keys(obj);
    return obj[colourKeys[(colourKeys.length * Math.random()) << 0]];
  };
  keys.forEach((key) => (code[key] = pickRandomColour(colours)));
  return code;
};
// -----------------------------------------------------------
export const useInputChecker = (
  inputs: { [key: string]: PegInputType },
  setAllInputsFilled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    // checks if all inputs are filled
    if (allInputsFilled(inputs)) setAllInputsFilled(true);
    else setAllInputsFilled(false);
  }, [inputs]);
};
export const allInputsFilled = (inputs: { [key: string]: PegInputType }) => {
  for (const [, input] of Object.entries(inputs)) {
    if (input.peg.length === 0) return false;
  }
  return true;
};
