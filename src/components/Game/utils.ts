import { useEffect } from "react";
import {
  Attempt,
  CodeSlice,
  Colour,
  ColoursType,
  PegInputsType,
} from "../../interfaces";

export const generateCode = (keys: string[], colours: ColoursType) => {
  const code: ColoursType = {};
  const pickRandomColour = (obj: ColoursType) => {
    const colourKeys = Object.keys(obj);
    return obj[colourKeys[(colourKeys.length * Math.random()) << 0]];
  };
  const usedColours: Colour[] = [];
  let i = 0;
  while (usedColours.length < keys.length) {
    const newColour = pickRandomColour(colours);
    const isColourUsed = usedColours.find((colour) => colour === newColour);

    if (isColourUsed) continue;

    code[keys[i]] = newColour;
    usedColours.push(newColour);
    i++;
  }
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
// -----------------------------------------------------------
export const checkIfCodeBroken = (
  inputs: PegInputsType,
  code: ColoursType | null
) => {
  if (!code) return;

  for (const [key, { id, peg }] of Object.entries(inputs)) {
    const [_peg] = peg;
    if (_peg.hsl !== code[key].hsl) return false;
  }
  return true;
};

// -----------------------------------------------------------

export const handleWrongCode = (
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>,
  codeSlice: CodeSlice,
  inputs: PegInputsType,
  addAttempt: (attempt: Attempt) => void
) => {
  if (!codeSlice.code) return;

  const { code } = codeSlice;
  setDisplay(true);

  const codeEntries = Object.entries(code);
  const inputEntries = Object.entries(inputs);

  const attempt: Attempt = {
    black: 0,
    white: 0,
    colours: inputEntries.map(([key, value]) => value.peg[0].hsl),
  };

  const whiteMatches = [];
  codeEntries.forEach(([key, { id }]) => {
    // check if current property and key matches with the corresponding input property
    let blackMatch: string | null = null;
    if (id === inputs[key].peg[0].id) {
      attempt.black++;
      blackMatch = id;
    }

    const whiteMatch = inputEntries.find(
      // input-peg has same id as code peg, but not same position (key), and is not a black peg
      ([inputKey, value]) =>
        !blackMatch && value.peg[0].id === id && inputKey != key
    );

    // if a there is a white match, add it to the list and increment the white property
    whiteMatch && whiteMatches.push(whiteMatch[1].peg[0].id) && attempt.white++;
  });

  addAttempt(attempt);
};
