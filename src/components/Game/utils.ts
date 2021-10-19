import { useEffect } from "react";
import { ColoursType, PegInputsType } from "../../interfaces";

export const generateCode = (keys: string[], colours: ColoursType) => {
  const code: ColoursType = {};
  const pickRandomColour = (obj: ColoursType) => {
    const colourKeys = Object.keys(obj);
    return obj[colourKeys[(colourKeys.length * Math.random()) << 0]];
  };
  keys.forEach((key) => (code[key] = pickRandomColour(colours)));
  return code;
};
// -----------------------------------------------------------
export const useInputChecker = (
  inputs: PegInputsType,
  setAllInputsFilled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    // checks if all inputs are filled
    if (checkAllInputsFilled(inputs)) setAllInputsFilled(true);
    else setAllInputsFilled(false);
  }, [inputs]);
};
export const checkAllInputsFilled = (inputs: PegInputsType) => {
  for (const [, input] of Object.entries(inputs)) {
    if (input.peg.length === 0) return false;
  }
  return true;
};
export const checkIfCodeBroken = (
  inputs: PegInputsType,
  code: ColoursType | null
) => {
  if (!code) return;
  console.log("code:", code);

  for (const [key, { id, peg }] of Object.entries(inputs)) {
    const [_peg] = peg;
    if (_peg.hsl !== code[key].hsl) return false;
  }
  console.log("true!");
  return true;
};
