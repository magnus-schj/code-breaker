import {
  Attempt,
  CodeSlice,
  InitialOutputs,
  InputsData,
} from "../../interfaces";

export const checkIfCodeBroken = (
  inputs: InputsData,
  code: InitialOutputs | null
) => {
  if (!code) return;

  for (const [key, { name, hsl }] of Object.entries(inputs)) {
    if (hsl !== code[key].hsl) return false;
  }
  return true;
};

// -----------------------------------------------------------

export const createAttempt = (
  codeSlice: CodeSlice,
  inputs: InputsData,
  addAttempt: (attempt: Attempt) => void
) => {
  if (!codeSlice.code) return;

  const { code } = codeSlice;

  const codeEntries = Object.entries(code);
  const inputEntries = Object.entries(inputs);

  const attempt: Attempt = {
    black: 0,
    white: 0,
    colours: inputEntries.map(([key, value]) => value.hsl),
  };

  const whiteMatches = [];
  codeEntries.forEach(([key, { name }]) => {
    // check if current property and key matches with the corresponding input property
    let blackMatch: string | null = null;
    if (name === inputs[key].name) {
      attempt.black++;
      blackMatch = name;
    }

    const whiteMatch = inputEntries.find(
      // input has same name as code, but not same position (key), and is not a black peg
      ([inputKey, value]) =>
        !blackMatch && value.name === name && inputKey != key
    );

    // if a there is a white match, add it to the list and increment the white property
    whiteMatch && whiteMatches.push(whiteMatch[1].name) && attempt.white++;
  });

  addAttempt(attempt);
};
